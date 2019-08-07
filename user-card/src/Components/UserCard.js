import React from 'react'
import {Card} from 'semantic-ui-react'
import FollowersList from './FollowersList';


export default function UserCard(props) {
    const {user,followers} = props
    return (
     
            <div  style  ={{display:'flex',flexDirection :"column", alignItems: 'center'}}>
                <Card  style ={{border:'groove red 20px',borderRadius:'20px'}}
                image= {user.avatar_url}
                header={`Name: ${user.name}`}
                meta={`Location: ${user.location}`}
                description={`Bio: ${user.bio}`}
                extra= {`Followers: ${user.followers}`}
                />
                <h1 style ={{fontSize: '3rem', color:'green'}}>Followers</h1>
                <FollowersList followers = {followers}  />
            </div>
        
    )
}
