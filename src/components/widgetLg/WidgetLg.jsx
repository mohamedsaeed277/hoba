import './WidgetLg.css';

export default function WidgetLg() {
    return (
        <div className="widgetLg">
         <h3 className="widgetLgTitle">احدث الطلبات</h3> 
         <table className="widgetLgTable">
           <tr className="widgetTr">
           <th className="widgetLgTh">رقم الطلب</th>
            <th className="widgetLgTh">الاسم</th>
            <th className="widgetLgTh">التاريخ</th>
            <th className="widgetLgTh">الكمية</th>
            <th className="widgetLgTh">الحالة</th>   
           </tr>
           <tr className="widgetLgTr">
           <td className="widgetLgDate">١</td>
            <td className="widgetLgUser">
             <span className="widgetLgName">ابراهيم</span>
            </td>
            <td className="widgetLgDate">٤ يناير ٢٠٢١</td>
            <td className="widgetLgAmount">٤٠٠$</td>
            <td className="widgetLgStatus">
              <button className="approved">متاح</button>  
            </td>
           </tr>
           <tr className="widgetLgTr">
           <td className="widgetLgDate">٢</td>
            <td className="widgetLgUser">
             <span className="widgetLgName">علي</span>
            </td>
            <td className="widgetLgDate">٦ يناير ٢٠٢١</td>
            <td className="widgetLgAmount">٢٠٠$</td>
            <td className="widgetLgStatus">
              <button className="pending">معلق</button>  
            </td>
           </tr>
           <tr className="widgetLgTr">
           <td className="widgetLgDate">٣</td>
            <td className="widgetLgUser">
             <span className="widgetLgName">محمد</span>
            </td>
            <td className="widgetLgDate">٧ يناير ٢٠٢١</td>
            <td className="widgetLgAmount">٣٠٠$</td>
            <td className="widgetLgStatus">
              <button className="approved">متاح</button>  
            </td>
           </tr>
           <tr className="widgetLgTr">
           <td className="widgetLgDate">٤</td>
            <td className="widgetLgUser">
             <span className="widgetLgName">احمد</span>
            </td>
            <td className="widgetLgDate">٩ يناير ٢٠٢١</td>
            <td className="widgetLgAmount">٢٠٠$</td>
            <td className="widgetLgStatus">
              <button className="rejected">مرفوض</button>  
            </td>
           </tr>
         </table>
        </div>
    )
}
