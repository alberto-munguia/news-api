import React, { useState } from 'react'
import { Alert, Col, Container, Row } from 'react-bootstrap'

import { useFetchNews } from '../hooks/useFetchNews'

import News from '../components/News'
import SearchBox from '../components/SearchBox'

const App = () => {
    const [customSearch, setCustomSearch] = useState('');
    const { data: news, isLoading} = useFetchNews(customSearch)

    console.log('isLoading', isLoading);
    console.log('news', news);

    return (
        <Container className="mt-5">
            <Row>
                <Col md={ 7 }>
                    <SearchBox setSearch={ setCustomSearch } />
                </Col>
            </Row>
            <Row>
                <Col className="mt-4">
                    <h2>Latest News</h2>
                    <hr />
                </Col>
            </Row>
            <Row>
                { isLoading
                    ? (
                        <Col>
                            <Alert variant="info">Loading news, please wait...</Alert>
                        </Col>
                    )
                    : news.articles.map((item, index) => <News item={ item } key={ index } />)
                }
            </Row>
        </Container>
    )
};

export default App
