import React from 'react'
import { ClientItem, Container, Section } from './TrustedClients.styled'
import clients from './ClientsData'

function TrustedClients() {
  return (
    <Section>
        <Container>
            {clients.map(obj =>(
                <ClientItem src={obj}>

                </ClientItem>
            ))}
        </Container>
    </Section>
  )
}

export default TrustedClients