import Header from '../../Components/Rasindu/Header';
import '../../Components/Rasindu/css/report.css';
import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import 'jspdf-autotable';
import jsPDF from 'jspdf';

function IncomeReport() {
    const [incomeData, setIncomeData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [totalIncome, setTotalIncome] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const bankIncomeResponse = await Axios.get('http://localhost:8070/api/bpayment');
                const creditIncomeResponse = await Axios.get('http://localhost:8070/api/cards');
                const directIncomeResponse = await Axios.get('http://localhost:8070/api/dpayment');
                
                // Combine all income data into a single array
                const bankIncome = bankIncomeResponse.data || [];
                const creditIncome = creditIncomeResponse.data || [];
                const directIncome = directIncomeResponse.data || [];
                
                const combinedIncomeData = [...bankIncome, ...creditIncome, ...directIncome];

                setIncomeData(combinedIncomeData);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching income data:", error);
            }
        };

        fetchData();
    }, []);

    // Calculate total income
    useEffect(() => {
        const calculateTotalIncome = () => {
            const total = incomeData.reduce((acc, income) => acc + income.amount, 0);
            setTotalIncome(total);
        };

        calculateTotalIncome();
    }, [incomeData]);

    const downloadPDF = () => {
        const doc = new jsPDF();
        doc.setFontSize(10);
        doc.text("Protons E&E", 10, 10);
        doc.text("+94 774015896", 10, 20);
        doc.text("protons@gmail.com", 10, 30);
        doc.text("", 10, 40);
        doc.setLineWidth(0.1);
        doc.setDrawColor(0);
        doc.line(10, 45, 200, 45);
        doc.setFontSize(18);
        doc.text("Income Report", 10, 60);
        doc.setLineWidth(0.1);
        doc.line(10, 65, 200, 65);
        const headers = [[ 'Amount', 'Product']];
        const data = incomeData.map(income => [income.amount, income.product]);
        doc.autoTable({
            head: headers,
            body: data,
            startY: 90
        });
        doc.setFontSize(12);
        doc.text(`Total Income: Rs.${totalIncome}`, 10, doc.autoTable.previous.finalY + 10);
        doc.setFontSize(6);
        doc.text("Generated by Financial Manager", 150, doc.autoTable.previous.finalY + 40);
        doc.setLineWidth(0.1);
        doc.line(10, doc.autoTable.previous.finalY + 20, 200, doc.autoTable.previous.finalY + 20);
        doc.setFontSize(6);
        const currentDate = new Date();
        const formattedDate = `${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`;
        doc.text(`Date: ${formattedDate}`, 150, doc.autoTable.previous.finalY + 30);
        doc.save(`income-report.pdf`);
    };

    return (
        <div className="body1">
            <Header />
            <br />
            <br />
            <div>
                <button style={{ color: "#ffffff", padding: "px 20px", fontSize: "20px", background: "rgb(236, 67, 0)", marginLeft: "20px", width: "200px", borderRadius: "10px" }} onClick={downloadPDF}>Download PDF</button>
                <br />
                <br />
            </div>
            <br />
            <br />
            <div className="container" id='report' style={{backgroundColor:" #fff"}}>
                <p className='rReportp'>Protons E&E</p>
                <p className='rReportp'>+94 774015896</p>
                <p className='rReportp'>protons@gmail.com</p>
                <h3 className='rh3Report' style={{ color: "red", fontSize: "30px", fontFamily: "Sans-serif" }}>Income Report</h3>
                <br />
                <br />
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <table className='rTabaleReport'>
                        <thead>
                            <tr className="rtrTable">
                                <th className='rthReport' >Amount</th>
                                <th className='rthReport' >Product Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {incomeData.length > 0 ? (
                                incomeData.map((income, index) => (
                                    <tr className="rtrTable" key={index}>
                                        <td className="rtdReport">{income.amount}</td>
                                        <td className="rtdReport">{income.product}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr className="rtrTable">
                                    <td colSpan="5" className="text-center">No incomes found</td>
                                </tr>
                            )}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colspan="2" className="rtotal">Total:</td>
                                <td className="rtotal">{totalIncome}</td>
                            </tr>
                        </tfoot>
                    </table>
                )}
                <br />
                <div className="rfooter">
                    <p>Generated by Financial Manager</p>
                </div>
            </div>
            <br></br>
            <br></br>
        </div>
    )
}

export default IncomeReport;
