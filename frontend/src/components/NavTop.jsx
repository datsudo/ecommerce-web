import { faNewspaper, faPeopleGroup } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Container, Row, Col } from "react-bootstrap"

export default function NavTop() {
  const navPhoneNumber = "+63(12)3456-7890"
  const navEmail = "example@gmail.com"
  const aboutNavMenuLabel = ( <> <FontAwesomeIcon className="mt-1 pe-2" icon={faPeopleGroup} /> About Us </> )
  const blogNavMenuLabel = ( <> <FontAwesomeIcon className='mt-1 pe-2' icon={faNewspaper} /> Blog </> )

  return (
    <Container fluid className='p-0 navbar-upper'>
      <Row className='p-0 navbar-upper-row'>
        {/* BRAND NAME */}
        <Col lg={4} sm={12} xs={12}>
          <Row lg='auto'>
            <Col lg='auto' className='text-center navbar-label navbar-upper-brand'>
              BRAND NAME
            </Col>
          </Row>
        </Col>

        <Col lg={8}>
          <Row lg='auto' className='d-flex justify-content-end'>

            <Col lg='auto'>
              <Row lg='auto' className='d-flex justify-content-end text-center'>
                  {/* phone num */}
                  <Col lg='auto' md={6} sm={6} xs={6} className='navbar-label'>{navPhoneNumber}</Col>

                  {/* email */}
                  <Col lg='auto' md={6} sm={6} xs={6} className='navbar-label'>{navEmail}</Col>
              </Row>
            </Col>

            <Col lg='auto'>
              <Row lg={12} className='d-flex text-center justify-content-between'>
                {/* about */}
                <Col lg='auto' md={5} sm={5} xs={5} className='navbar-label navbar-upper-imp'>{aboutNavMenuLabel}</Col>

                {/* blog */}
                <Col
                  lg='auto'
                  md={5} sm={5} xs={5}
                  className='navbar-label navbar-upper-imp navbar-upper-blog'
                >{blogNavMenuLabel}</Col>
              </Row>
            </Col>

          </Row>
        </Col>

      </Row>
    </Container>
  )
}
