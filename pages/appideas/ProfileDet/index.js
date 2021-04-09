import React, {useState} from 'react';

import {FaChevronDown} from 'react-icons/fa';

import Layout from '../../../src/components/Layout';
import {Container} from './styles';

export default function ProfileDet(){

    const [profiles, setProfiles] = useState([
                {id:1,
                hideshow:"+",
                hideshowbool:"none",
                name:"Alfredo Holz Junior",
                age:30,
                desc:"Desenvolvendo apps com react"},
                {id:2,
                hideshow:"+",
                hideshowbool:"none",
                name:"Jessica Caroline Ribeiro Leonel",
                age:26,
                desc:"Fotografa em tempo integral"}]);

    function handleHideShow(e) {
        const {name,value} = e.target;

        for(var i = 0; i < profiles.length; i++) {
            const {id,hideshow} = profiles[i];
            if (value == id){
                let newProfile = [...profiles];
                if(hideshow === "+"){
                    newProfile[i].hideshow = "-";
                    newProfile[i].hideshowbool = "block";
                    setProfiles(newProfile);
                } else {
                    newProfile[i].hideshow = "+";
                    newProfile[i].hideshowbool = "none";
                    setProfiles(newProfile);
                }
            }
        }

    }

    return(
        <Layout nameTitle="ProfileDet">
            <Container>
                <div className="project-main col-9 col-s-11">
                    <h1>Profiles</h1>
                    <div className="profiles">
                        <ul>
                        {profiles.map(profile =>
                            <li key={profile.id}>
                                <div className="profile-item">
                                    <p className="name">{profile.name}</p>
                                    <p className="age">Idade: {profile.age}</p>
                                    <button 
                                        className="more" 
                                        onClick={handleHideShow}
                                        name="hideshow"
                                        value={profile.id}
                                        type="text" 
                                        >{profile.hideshow}</button>
                                    <p className="desc" style={{display:profile.hideshowbool}}>{profile.desc}</p>
                                </div>
                            </li>
                        )}
                        </ul>
                    </div>

                </div>
            </Container>
        </Layout>
    )
}