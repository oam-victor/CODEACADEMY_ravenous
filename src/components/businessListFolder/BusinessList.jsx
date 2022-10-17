import './businessList.scss';
import { Business } from '../businessFolder/Business';

export const BusinessList = ({businesses}) => {
  return (
    <div className="BusinessList">
        {
          businesses.map((business)=>{
            return <Business key = {business.id} businessx={business}/>
          })
        }
    </div>
  )
};
