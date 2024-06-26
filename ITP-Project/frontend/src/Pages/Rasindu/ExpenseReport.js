import Header from '../../Components/Rasindu/Header';
import '../../Components/Rasindu/css/report.css';
import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import 'jspdf-autotable';
import jsPDF from 'jspdf';


function ExpenseReport(){
    const [expenses, setExpenses] = useState([]);
    const [selectedMonth, setSelectedMonth] = useState('');

    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;

    useEffect(() => {
        getExpenses();
    }, [selectedMonth]);

    const getExpenses = () => {
        Axios.get('http://localhost:8070/expence')
            .then(response => {
                const filteredExpenses = response.data.filter(expense => {
                    
                    const expenseMonth = expense.date.split('-')[1];
                    return expenseMonth === selectedMonth;
                });
                setExpenses(filteredExpenses);
            })
            .catch(error => {
                console.error("Axios Error:", error);
            });
    };
    

    const calculateTotal = () => {
        let total = 0;
        expenses.forEach(expense => {
            total += expense.amount;
        });
        return total;
    };

    const downloadPDF = () => {
        const doc = new jsPDF();

       
        doc.setFontSize(10);
        
        doc.text("Protons E&E", 10, 10);
        doc.text("+94 774015896", 10, 20);
        doc.text("protons@gmail.com", 10, 30);

        
        doc.text("", 10, 40);

        
        doc.setLineWidth(0.1); // Set line width
        doc.setDrawColor(0); // Set line color (black)
        doc.line(10, 45, 200, 45); // Draw a line from (10, 45) to (200, 45)

        doc.setFontSize(18);
        doc.text("Expense Report", 10, 60);

        
        doc.setLineWidth(0.1);
        doc.line(10, 65, 200, 65);


        const headers = [['Date', 'Amount', 'Category']];
        const data = expenses.map(expense => [expense.date, `- ${expense.amount}`, expense.category]);
        

        doc.autoTable({
            head: headers,
            body: data,
            startY: 90
            
        });

        doc.setFontSize(12);
        doc.text(`Total Expense: Rs.${calculateTotal()}`, 10, doc.autoTable.previous.finalY + 10);
        doc.setFontSize(6);
        doc.text("Generated by Financial Manager", 150, doc.autoTable.previous.finalY + 40);
        doc.setLineWidth(0.1);
        doc.line(10, doc.autoTable.previous.finalY + 20, 200, doc.autoTable.previous.finalY + 20);

        doc.setFontSize(6);

        // Adding current date to the PDF
        doc.text(`Date: ${formattedDate}`, 150, doc.autoTable.previous.finalY + 30);
        doc.save(`expense-report.pdf`);
    };

    const handleMonthChange = (event) => {
        setSelectedMonth(event.target.value);
    };
    


    return(
    <div className="body1">
           <Header />
           <br />
           <br />
        
        <div >
        
           <div >
           <br />
           <br />
            <button style={{color:"#ffffff",padding:"px 20px",fontSize:"20px",background:"rgb(236, 67, 0)",marginLeft:"20px",width:"200px",borderRadius:"10px"}} onClick={downloadPDF}>Download PDF</button>
            <br></br>
            <br></br>

            <label className='rReportLabel' htmlFor="month">Month: </label>
                <select id="month" value={selectedMonth} onChange={handleMonthChange}>
                    <option value="">Select Month</option>
                    <option value="01">January</option>
                    <option value="02">February</option>
                    <option value="03">March</option>
                    <option value="04">April</option>
                    <option value="05">May</option>
                    <option value="06">June</option>
                    <option value="07">July</option>
                    <option value="08">August</option>
                    <option value="09">September</option>
                    <option value="10">Octomber</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                </select>

           </div>
           <br></br>
           <br></br>
           
           <div className="container" id='report' style={{backgroundColor:" #fff"}}>
                <p className='rReportp'>Protons E&E</p>
                <p className='rReportp'>+94 774015896</p>
                <p className='rReportp'>protons@gmail.com</p>

                <h3 className='rh3Report' style={{color:"red",fontSize:"30px",fontFamily:"Sans-serif"}} >Expense Report</h3>

                <br></br>
                <br></br>
        
                <table className='rTabaleReport'>
                <thead>
                    <tr className="rtrTable">
                        <th className='rthReport' >Date</th>
                        <th className='rthReport' >Amount</th>
                        <th className='rthReport' >Category</th>
                    </tr>
                </thead>
                <tbody>
                {expenses && expenses.length > 0 ? (
                            expenses.map((expense, index) => (
                                <tr className="rtrTable" key={index}>
                                    <td className="rtdReport">{expense.date}</td>
                                    <td className="rtdReport">-{expense.amount}</td>
                                    <td className="rtdReport">{expense.category}</td>
                                    
                                </tr>
                            ))
                        ) : (
                            <tr className="rtrTable">
                                <td colSpan="5" className="text-center">No expenses found</td>
                            </tr>
                        )}
                
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="2" class="rtotal">Total:</td>
                        <td className="rtotal">{calculateTotal()}</td>
                    </tr>
                </tfoot>
                </table>
                <br></br>
                <div className="rfooter">
                <p>Generated by Financial Manager</p>
                </div>
            </div>
        </div>
        <br></br>
        <br></br>
    </div>
    )
}
export default ExpenseReport; 