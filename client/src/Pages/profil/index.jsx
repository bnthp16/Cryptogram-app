import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Button } from "components/Button";
import Div from "components/Div";
import { PageContainer } from "components/PageContainer";
import { delete_profil }from "Actions/profil";
import { navEnable } from "utils/navUtils";
import { Marged } from "components/Marged";

const Profil = ({ state, token }) => {
  const submitDelete = (e) => {
    delete_profil(e,token)
    window.location.reload()
  }
  console.log(state, token);
  useEffect(()=>{
    navEnable()
  },[])
  return(
    <PageContainer bg='#F8F8F9'>
      <Marged top="4em"/>
      <h1 className="hone-center">Informations profil</h1>
      <Div display='flex' alignItems='center' justifyContent='center' flexDirection='column' className="profil-wrap">
        <Div display='flex' alignItems='center' justifyContent='start' flexDirection='column'  className="user-infos-wrap">
            <div className="avatar-p">
                {state.username.toUpperCase()[0]}
            </div>
            <h2 className="user-name">{state.username}</h2>
            <p className="user-email">{state.email}</p>
            <p className="user">Inscrit depuis: {state.created_at}</p>
            <div className="hr"></div>
            <div className="d-user">
              <h2>Supprimer son compte</h2>
              <Button primary_xl_del onClick={(e)=> submitDelete(e)}>Supprimer son compte</Button>
            </div>
        </Div>
      </Div>
    </PageContainer>
  )
}

export default Profil

export const ProfilStore = connect(
  (state) => ({
    state: state.authReducer.currentUserInfo
  })
)(Profil)
