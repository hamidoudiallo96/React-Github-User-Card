import React from 'react'
import {Card} from 'semantic-ui-react'



export default function FollowersList(props) {
    const {followers} = props
    console.log(followers)
    return (
        <div style  ={{display:'flex', flexFlow:'row wrap', marginLeft:'130px', padding: '20px'}}>
            {followers.map((item) => (
                
                <Card key = {item.id} style ={{border:'groove red 20px',borderRadius:'20px'}}
                    image= {item.avatar_url}
                    header={<a href ="{item.login}">Name</a>} 
                    meta={<a href ="{item.followers_url}">Followers:</a>} 
                    description={<a href ="{item.html_url}">Github Profile</a>} 
                    
                 />
            ))}
        </div>
    )
}
