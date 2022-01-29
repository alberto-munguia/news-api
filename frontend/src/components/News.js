import React from 'react'
import PropTypes from 'prop-types'
import { Button, Card, Col } from 'react-bootstrap'

const News = ({ item }) => {
    return (
        <Col md={ 3 } className="mb-3">
            <Card border="secondary">
                <Card.Img
                    variant="top"
                    src={ item.urlToImage ? item.urlToImage : '/img/no-image.jpg' }
                />
                <Card.Body>
                    <Card.Title>{ item.title }</Card.Title>
                    <Card.Text>{ item.description }</Card.Text>
                    <div className="d-grid">
                        <Button variant="outline-primary" size="sm">Read more...</Button>
                    </div>
                </Card.Body>
                <Card.Footer className="fst-italic text-end">
                    <small>- { item.source.name }</small>
                </Card.Footer>
            </Card>
        </Col>
    )
};

News.propTypes = {
    item: PropTypes.object.isRequired,
}

export default News
