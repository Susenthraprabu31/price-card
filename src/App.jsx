import React from 'react'
import Card from './Card'
function App() {

  let data =[
    {
      plan:"Free",
      price:"0",
      user:"Single user",
      isUser:true,
      storage:"5GB Storage",
      isStorage:true,
      public:"Unlimited public project",
      isPublic:true,
      community:"Community Access",
      isCommunity:true,
      Private:"Unlimited private projects",
      isPrivate:false,
      Support:"Dedicated phone support",
      isSupport:false,
      subdomain:"Free subdomain",
      isSubdomain:false,
      reports:"Monthly status report",
      isReports:false,

    },
    {
      plan:"Plus",
      price:"9",
      user:"Five user",
      isUser:true,
      storage:"5GB Storage",
      isStorage:true,
      public:"Unlimited public project",
      isPublic:true,
      community:"Community Access",
      isCommunity:true,
      Private:"Unlimited private projects",
      isPrivate:true,
      Support:"Dedicated phone support",
      isSupport:true,
      subdomain:"Free subdomain",
      isSubdomain:true,
      reports:"Monthly status report",
      isReports:false,
    },
    {
      plan:"Pro",
      price:"49",
      user:"Unlimited user",
      isUser:true,
      storage:"5GB Storage",
      isStorage:true,
      public:"Unlimited public project",
      isPublic:true,
      community:"Community Access",
      isCommunity:true,
      Private:"Unlimited private projects",
      isPrivate:true,
      Support:"Dedicated phone support",
      isSupport:true,
      subdomain:"Free subdomain",
      isSubdomain:true,
      reports:"Monthly status report",
      isReports:true, 
    },
  ]

  return<>
  <section className="pricing py-5">
  <div className="container">
    <div className="row">
     {data.map((e,i)=>{
      return <Card  data ={e} key={i}/>  
      })}
    </div>
  </div>
</section>
  </>
}

export default App