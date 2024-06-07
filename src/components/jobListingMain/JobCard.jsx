import React, { useContext, useEffect, useState } from 'react'
import { FiExternalLink } from "react-icons/fi";
import './jobListingMain.css'
import { TonContext, useTon } from '../../utils/context';
import toast from 'react-hot-toast';

const JobCard = ({jobItem,nav}) => {
  const tonAuth=useContext(TonContext)
  return (
    <div className='job-card-main'>
        <p className="job-title-main">{jobItem?.name}</p>
        <FiExternalLink className='job-redirect' onClick={()=>{
            if(tonAuth?.isConnected){
              console.log(jobItem)
              tonAuth.setJob(jobItem)
              nav('/jobDetail')
            }else{
              toast.error("Please connect your wallet to proceed further ! ")
            }
            
        }}/>
    </div>
  )
}

export default JobCard