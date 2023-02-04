import { Button, Form, InputGroup, Card, Row, Col } from 'react-bootstrap'
import { useState } from 'react'
// Importanndo a api viaCep
import api from '../services/api'


function ExibeCep() {

    /* States do input - States para guardar o CEP */
    const [buscaCep, setBuscaCep] = useState ('')
    const [cep, setCep] = useState ({})
    
    /* Adcionando função para busca através do botão */
    async function handleBuscarCep (e) {
            e.preventDefault()
            // Previnindo que busque com o input vazio
            if (buscaCep === '') {
                alert ('Preencha um cep')
                return;
            }    

             try {   
                //try para quando a busca deu certo            
                const resposta = await api.get(`${buscaCep}/json`)
                setCep(resposta.data)
                /* Resetar o input */ setBuscaCep('')
            }

             catch {
                //Catch para quando a busca deu errado
                alert ('Ops, erro ao buscar o cep! Tente novamente')
                /* Resetar o input */ setBuscaCep('')
             }
    }

    // Criando uma função para buscar usando o enter

    const handleEnter = e => {
        if (e.key === 'Enter' || e.key === 13)  {  
            handleBuscarCep()
            e.preventDefault();
        }
        
    }


    return  (

    <>
    <h1 className='text-center pb-3'>Buscador de Cep</h1>
    {/* Input de busca + Botão */}
       <Form className='pb-3'>
            <InputGroup>
                <Form.Control
                type='text'
                placeholder='Informe o Cep'
                value={buscaCep}
                onChange={(value) => setBuscaCep (value.target.value)}
                onKeyDown={handleEnter}
                />
                <Button onClick={handleBuscarCep}>Pesquisar</Button>
            </InputGroup>
        </Form>
        

        {Object.keys(cep).length > 0 && (
                <Card>
                <Card.Header>ENDEREÇO COMPLETO</Card.Header>
                    <Card.Body>
                        <Card.Title>CEP 05583010</Card.Title>
                        <Card.Text>
                            <Row>
                                <Col>Endereço: {cep.logradouro}</Col>
                                <Col>Bairro: {cep.bairro}</Col>
                                <Col>Estado: {cep.localidade}</Col>
                                <Col>UF: {cep.uf}</Col>
                            </Row>
                        </Card.Text>
                    </Card.Body>
                </Card>   
        )}      
    </>
)
    
}

export default ExibeCep