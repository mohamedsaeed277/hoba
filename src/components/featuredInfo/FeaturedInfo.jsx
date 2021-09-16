import './FeaturedInfo.css';
import {ArrowDownward,ArrowUpward} from '@material-ui/icons';

export default function FeaturedInfo() {
    return (
        <div className="featured">
           <div className="featuredItem">
             <span className="featuredTitle">الايرادات</span>
             <div className="featuredMoneyContainer">
               <span className="featuredMoney">$١،٤٣٢</span>
               <span className="featuredMoneyRate">
                 -١٢.٤ <ArrowUpward className="arrowblue" />  
               </span>
             </div>
             <span className="featuredSub">مقارنة بالشهر الماضي</span>
            </div>
            <div className="featuredItem">
             <span className="featuredTitle">المبيعات</span>
             <div className="featuredMoneyContainer">
               <span className="featuredMoney">$٣،٤٣٢</span>
               <span className="featuredMoneyRate">
                 -١٢.٤ <ArrowDownward className="arrowred" />  
               </span>
             </div>
             <span className="featuredSub">مقارنة بالشهر الماضي</span>
            </div>
            <div className="featuredItem">
             <span className="featuredTitle">التكلفة</span>
             <div className="featuredMoneyContainer">
               <span className="featuredMoney">$٢،٤٣٢</span>
               <span className="featuredMoneyRate">
                 -١٢.٤ <ArrowDownward className="arrowred" />  
               </span>
             </div>
             <span className="featuredSub">مقارنة بالشهر الماضي</span>
            </div> 
        </div>
    )
}
