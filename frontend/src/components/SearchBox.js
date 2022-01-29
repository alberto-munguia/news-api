import React from 'react'
import PropTypes from 'prop-types'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { Formik } from 'formik'

const SearchBox = ({ setSearch }) => {
    const handleSearch = ({ search }, { setSubmitting }) => {
        setSearch(search)
        setSubmitting(false)
    }

    return (
        <Formik
            initialValues={{ search: '' }}
            onSubmit={ handleSearch }
        >
            {({
                values,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
            }) => (
                <Form onSubmit={ handleSubmit }>
                    <Row className="align-items-center">
                        <Col md={ 3 }>
                            <Form.Label className="col-form-label">Search</Form.Label>
                        </Col>
                        <Col md={ 7 }>
                            <Form.Control
                                name="search"
                                type="text"
                                placeholder="Search"
                                onChange={ handleChange }
                                onBlur={ handleBlur }
                                value={ values.search }
                            ></Form.Control>
                        </Col>
                        <Col md={ 2 }>
                            <Button variant="outline-success" type="submit" disabled={ isSubmitting }>Go</Button>
                        </Col>
                    </Row>
                </Form>
            )}
        </Formik>
    )
};

SearchBox.propTypes = {
    setSearch: PropTypes.func.isRequired,
}

export default SearchBox
