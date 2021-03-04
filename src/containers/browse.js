import React, { useContext, useEffect, useState } from 'react'
import { SelectProfileContainer } from './profiles'
import { FirebaseContext } from '../context/firebase'
import { Header, Loading } from '../components'
import * as ROUTES from '../constants/routes'
import logo from '../logo.svg'

export function BrowseContainer({ slides }) {
    const [profile, setProfile] = useState({})
    const [loading, setLoading] = useState(true)
    const { firebase } = useContext(FirebaseContext)
    const user = firebase.auth().currentUser || {}

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [profile.displayName])

    return profile.displayName ? (
        <>
        {loading ? (<Loading src={user.photoURL} />) : (<Loading.ReleaseBody />)}
        <Header src="joker1">
            <Header.Frame>
                <Header.Group>
                    <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
                    <Header.TextLink>Series</Header.TextLink>
                    <Header.TextLink>Filmes</Header.TextLink>
                </Header.Group>
                <Header.Group>
                    <Header.Profile>
                        <Header.Picture src={user.photoURL} />
                        <Header.Dropdown>
                            <Header.Group>
                                <Header.Picture src={user.photoURL} />
                                <Header.TextLink>{user.displayName}</Header.TextLink>
                            </Header.Group>
                        </Header.Dropdown>
                    </Header.Profile>
                </Header.Group>                
            </Header.Frame>
            <Header.Feature>
                <Header.FeatureCallOut>Assista Coringa Agora</Header.FeatureCallOut>
                <Header.Text>
                    Isolado, intimidado e desconsiderado pela sociedade, o fracassado comediante Arthur Fleck inicia seu caminho como uma mente criminosa após assassinar três homens em pleno metrô. Sua ação inicia um movimento popular contra a elite de Gotham City, da qual Thomas Wayne é seu maior representante.
                </Header.Text>
            </Header.Feature>
        </Header>
        </>
    ) : (<SelectProfileContainer user={user} setProfile={setProfile} />)
}