// SummaryTable.jsx
import '../table/summertable'
<table />
import React from 'react';

const SummaryTable = () => {
  return (
    <div>
      <table className="border-separate border border-slate-500">
        <thead>
          <tr>
          
            <th className="border border-slate-600; bg-orange-100">Totals</th>
            <th className="border border-slate-600; bg-orange-100">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-slate-700; bg-orange-100">Total Income</td>
            <td className="border border-slate-700; bg-orange-100"></td>
          </tr>
          <tr>
            <td className="border border-slate-700; bg-orange-100">Total Expense</td>
            <td className="border border-slate-700; bg-orange-100"></td>
          </tr>
          <tr>
            <td className="border border-slate-700; bg-orange-100">Savings</td>
            <td className="border border-slate-700; bg-orange-100"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SummaryTable;
