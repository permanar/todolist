import Link     from 'next/link'
import fetch    from 'isomorphic-unfetch'
import Layout   from  '../components/layout.js'
import bts      from '../public/css/bootstrap.min.css'
import {Container, Row, Col, Card, CardImg, CardText,
        CardBody, CardTitle, CardSubtitle, Button}     from 'reactstrap'


const Index = (props) => (
      <main>
        <Layout />
        <Container>
            <br />
            <p>Hello Next.js</p>
            <Row>
                <Col>1</Col>
            </Row>
            <ul>
                {props.shows.map(item => (
                    <li key={item.id}>
                        <Link as={`/task/${item.title.replace(/\s+/g, '-').toLowerCase()}`} href={`/post?id=${item.id}`}>
                            <a>{item.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </Container>
    </main>
)


Index.getInitialProps = async function() {
    const res = await fetch('http://localhost:3001/api/v1/lists')
    const data = await res.json()

    console.log(`Show data fetched. Counted: ${data.length}`)

    return {shows: data}
}
export default Index
