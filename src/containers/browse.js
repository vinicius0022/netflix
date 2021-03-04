import React, { useContext, useEffect, useState } from 'react'
import { SelectProfileContainer } from './profiles'
import { FooterContainer } from './footer'
import { FirebaseContext } from '../context/firebase'
import { Card, Header, Loading } from '../components'
import * as ROUTES from '../constants/routes'
import logo from '../logo.svg'

export function BrowseContainer({ slides }) {
    const [category, setCategory] = useState('films')
    const [searchTerm, setSearchTerm] = useState('')
    const [profile, setProfile] = useState({})
    const [loading, setLoading] = useState(true)
    const [slideRows, setSlideRows] = useState([])

    const { firebase } = useContext(FirebaseContext)
    const user = firebase.auth().currentUser || {}

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [profile.displayName])

    useEffect(() => {
        setSlideRows(slides[category])
    },[slides, category])

    return profile.displayName ? (
        <>
        {loading ? (<Loading src={user.photoURL} />) : (<Loading.ReleaseBody />)}
        <Header src="joker1">
            <Header.Frame>
                <Header.Group>
                    <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
                    <Header.TextLink active={category === 'series' ? 'true' : 'false'} onClick={() => setCategory('series')} >Series</Header.TextLink>
                    <Header.TextLink active={category === 'films' ? 'true' : 'false'} onClick={() => setCategory('films')} >Filmes</Header.TextLink>
                </Header.Group>
                <Header.Group>
                    <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                    <Header.Profile>
                        <Header.Picture src={user.photoURL} />
                        <Header.Dropdown>
                            <Header.Group>
                                <Header.Picture src={user.photoURL} />
                                <Header.TextLink>{user.displayName}</Header.TextLink>
                            </Header.Group>
                            <Header.Group>
                                <Header.TextLink onClick={() => firebase.auth().signOut()} >Sair</Header.TextLink>
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
                <Header.PlayButton>Assistir</Header.PlayButton>
            </Header.Feature>
        </Header>

        <Card.Group>
            {slideRows.map((slideItem) => (
                <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
                    <Card.Title>{slideItem.title}</Card.Title>
                    <Card.Entities>
                        {slideItem.data.map((item) => (
                            <Card.Item key={item.docId} item={item}>
                                <Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} />
                                <Card.Meta>
                                    <Card.SubTitle>{item.title}</Card.SubTitle>
                                    <Card.Text>{item.description}</Card.Text>
                                </Card.Meta>
                            </Card.Item>
                        ))}
                    </Card.Entities>
                    {<Card.Feature category={category}>
                        
                    </Card.Feature>}
                </Card>
            ))}
        </Card.Group>
        <FooterContainer />
        </>
    ) : (<SelectProfileContainer user={user} setProfile={setProfile} />)
}