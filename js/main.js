// Botões
    const btn1 = document.getElementById('btn-1')
    const btn2 = document.getElementById('btn-2')
    const btn3 = document.getElementById('btn-3')
    const btn4 = document.getElementById('btn-4')
    const btn5 = document.getElementById('btn-5')
    const btn6 = document.getElementById('btn-6')
    const btn7 = document.getElementById('btn-7')
    const btn8 = document.getElementById('btn-8')
    const btn9 = document.getElementById('btn-9')
    const btn0 = document.getElementById('btn-0')
// Box add números
    const box1 = document.getElementById('box-1')
    const box2 = document.getElementById('box-2')
    const box3 = document.getElementById('box-3')
    const box4 = document.getElementById('box-4')
    const box5 = document.getElementById('box-5')
// Botões Click
    btn1.onclick = () => {
        if(box1.textContent == ""){
            document.getElementById('text-erro').style.display = "block"
        } else if(box2.textContent == ""){
            box2.innerText = (`${btn1.textContent}`)
            document.getElementById('text-erro').style.display = "none"
        } else if(box3.textContent == ""){
            box3.innerText = (`${btn1.textContent}`)
            document.getElementById('text-erro').style.display = "none"
        } else if(box4.textContent == ""){
            box4.innerText = (`${btn1.textContent}`)
            document.getElementById('text-erro').style.display = "none"
        } else if(box5.textContent == "") {
            // informações do veriador
            box5.innerText = btn1.textContent
            document.getElementById('text-erro').style.display = "none"
            if(box5.innerText == btn1.textContent){
                const BtnConfirma = document.getElementById('btn-confirma')
                const NomeCadidato = document.getElementById('nome-candidato')
                const TypeVeriador = document.getElementById('text-veriador')
                document.getElementById('img-candidatos').style.display = "block"
                document.getElementById('text-candidato-name').style.display = "flex"
                document.getElementById('text-seu-voto').style.display = "block"
                NomeCadidato.innerText = "Candidato01"
                TypeVeriador.innerText = "VERIADOR"
                // confirma voto
                BtnConfirma.onclick = () => {
                    document.getElementById('box-3').style.display = "none"
                    document.getElementById('box-4').style.display = "none"
                    document.getElementById('box-5').style.display = "none"
                    document.getElementById('img-candidatos').style.display = "none"
                    document.getElementById('text-numero').style.display = "none";
                    document.getElementById('text-partido').style.display = "none"
                    document.getElementById('linha').style.display = "none"
                    document.getElementById('final').style.display = "none"
                    document.getElementById('text-candidato-name').style.display = "none"
                    document.getElementById('text-seu-voto').style.display = "none"
                    TypeVeriador.innerText = "PREFEITO(A)"
                    box1.textContent = ""
                    box2.textContent = ""
                    const audioConfirma = new Audio('audio/confirma.mp3')
                    audioConfirma.play()
                }
            }
        } else {
            if(box1.textContent == ""){
                box1.innerText = (`${btn1.textContent}`)
            } else if(box2.textContent == ""){
                box2.innerText = (`${btn1.textContent}`)
            } else if(box3.textContent == ""){
                box3.innerText = (`${btn1.textContent}`)
            } else if(box4.textContent == ""){
                box4.innerText = (`${btn1.textContent}`)
            }else if(box5.textContent == ""){
                box5.innerText = (`${btn1.textContent}`)
            }
            document.getElementById('text-erro').style.display = "none"
        }
        // Partido eleitoral
        if(box2.textContent == btn1.textContent){
            const partido = document.getElementById('partido')
            partido.innerText = "PHP"
            document.getElementById('text-numero').style.display = "block"
            document.getElementById('text-partido').style.display = "flex"
            document.getElementById('linha').style.display = "block"
            document.getElementById('final').style.display = "block"
        }
    } 
        
    btn2.onclick = () => {
        if(box1.textContent == ""){
            document.getElementById('text-erro').style.display = "block"
        } else if(box2.textContent == ""){
            box2.innerText = (`${btn2.textContent}`)
            document.getElementById('text-erro').style.display = "none"
        } else if(box3.textContent == ""){
            document.getElementById('text-erro').style.display = "block"
        } else if(box4.textContent == ""){
            document.getElementById('text-erro').style.display = "block"
        } else if(box5.textContent == "") {
            box5.innerText = btn2.textContent
            document.getElementById('text-erro').style.display = "none"
            if(box5.innerText == btn2.textContent){
                // informações do veriador
                const BtnConfirma = document.getElementById('btn-confirma')
                const NomeCadidato = document.getElementById('nome-candidato')
                const TypeVeriador = document.getElementById('text-veriador')
                document.getElementById('img-candidatos').style.display = "block"
                document.getElementById('text-candidato-name').style.display = "flex"
                document.getElementById('text-seu-voto').style.display = "block"
                NomeCadidato.innerText = "Candidato02"
                TypeVeriador.innerText = "VERIADORA"
                // confirma voto
                BtnConfirma.onclick = () => {
                    document.getElementById('box-3').style.display = "none"
                    document.getElementById('box-4').style.display = "none"
                    document.getElementById('box-5').style.display = "none"
                    document.getElementById('img-candidatos').style.display = "none"
                    document.getElementById('text-numero').style.display = "none";
                    document.getElementById('text-partido').style.display = "none"
                    document.getElementById('linha').style.display = "none"
                    document.getElementById('final').style.display = "none"
                    document.getElementById('text-candidato-name').style.display = "none"
                    document.getElementById('text-seu-voto').style.display = "none"
                    TypeVeriador.innerText = "PREFEITO(A)"
                    box1.textContent = ""
                    box2.textContent = ""
                    const audioConfirma = new Audio('audio/confirma.mp3')
                    audioConfirma.play()
                }
            }
        } else {
            if(box1.textContent == ""){
            box1.innerText = (`${btn2.textContent}`)
            }else if(box2.textContent == ""){
                box2.innerText = (`${btn2.textContent}`)
            } else if(box3.textContent == ""){
                box3.innerText = (`${btn2.textContent}`)
            } else if(box4.textContent == ""){
                box4.innerText = (`${btn2.textContent}`)
            }else if(box5.textContent == ""){
                box5.innerText = (`${btn2.textContent}`)
            }
            document.getElementById('text-erro').style.display = "none"
        }
        if(box2.textContent == btn2.textContent){
            const partido = document.getElementById('partido')
            partido.innerText = "PTP"
            document.getElementById('text-numero').style.display = "block"
            document.getElementById('text-partido').style.display = "flex"
            document.getElementById('linha').style.display = "block"
            document.getElementById('final').style.display = "block"
        } 
    }

    btn3.onclick = () => {
        if(box1.textContent == ""){
            document.getElementById('text-erro').style.display = "block"
        } else if(box2.textContent == ""){
            box2.innerText = (`${btn3.textContent}`)
            document.getElementById('text-erro').style.display = "none"
        } else if(box3.textContent == ""){
            document.getElementById('text-erro').style.display = "block"
        } else if(box4.textContent == ""){
            document.getElementById('text-erro').style.display = "block"
        } else if(box5.textContent == "") {
            box5.innerText = btn3.textContent
            document.getElementById('text-erro').style.display = "none"
            if(box5.innerText == btn3.textContent){
                // informações do veriador
                const BtnConfirma = document.getElementById('btn-confirma')
                const NomeCadidato = document.getElementById('nome-candidato')
                const TypeVeriador = document.getElementById('text-veriador')
                document.getElementById('img-candidatos').style.display = "block"
                document.getElementById('text-candidato-name').style.display = "flex"
                document.getElementById('text-seu-voto').style.display = "block"
                NomeCadidato.innerText = "Candidato03"
                TypeVeriador.innerText = "VERIADORA"
                // confirma voto
                BtnConfirma.onclick = () => {
                    document.getElementById('box-3').style.display = "none"
                    document.getElementById('box-4').style.display = "none"
                    document.getElementById('box-5').style.display = "none"
                    document.getElementById('img-candidatos').style.display = "none"
                    document.getElementById('text-numero').style.display = "none";
                    document.getElementById('text-partido').style.display = "none"
                    document.getElementById('linha').style.display = "none"
                    document.getElementById('final').style.display = "none"
                    document.getElementById('text-candidato-name').style.display = "none"
                    document.getElementById('text-seu-voto').style.display = "none"
                    TypeVeriador.innerText = "PREFEITO(A)"
                    box1.textContent = ""
                    box2.textContent = ""
                    const audioConfirma = new Audio('audio/confirma.mp3')
                    audioConfirma.play()
                }
            }
        } else {
            if(box1.textContent == ""){
            box1.innerText = (`${btn3.textContent}`)
            }else if(box2.textContent == ""){
                box2.innerText = (`${btn3.textContent}`)
            } else if(box3.textContent == ""){
                box3.innerText = (`${btn3.textContent}`)
            } else if(box4.textContent == ""){
                box4.innerText = (`${btn3.textContent}`)
            }else if(box5.textContent == ""){
                box5.innerText = (`${btn3.textContent}`)
            }
            document.getElementById('text-erro').style.display = "none"
        }
        if(box2.textContent == btn3.textContent){
            const partido = document.getElementById('partido')
            partido.innerText = "PJM"
            document.getElementById('text-numero').style.display = "block"
            document.getElementById('text-partido').style.display = "flex"
            document.getElementById('linha').style.display = "block"
            document.getElementById('final').style.display = "block"
        }
    }

    btn4.onclick = () => {
        if(box1.textContent == ""){
            document.getElementById('text-erro').style.display = "block"
        } else if(box2.textContent == ""){
            box2.innerText = (`${btn4.textContent}`)
            document.getElementById('text-erro').style.display = "none"
        } else if(box3.textContent == ""){
            document.getElementById('text-erro').style.display = "block"
        } else if(box4.textContent == ""){
            document.getElementById('text-erro').style.display = "block"
        } else if(box5.textContent == "") {
            box5.innerText = btn4.textContent
            document.getElementById('text-erro').style.display = "none"
            if(box5.innerText == btn4.textContent){
                // informações do veriador
                const BtnConfirma = document.getElementById('btn-confirma')
                const NomeCadidato = document.getElementById('nome-candidato')
                const TypeVeriador = document.getElementById('text-veriador')
                document.getElementById('img-candidatos').style.display = "block"
                document.getElementById('text-candidato-name').style.display = "flex"
                document.getElementById('text-seu-voto').style.display = "block"
                NomeCadidato.innerText = "Candidato04"
                TypeVeriador.innerText = "VERIADOR"
                // confirma voto
                BtnConfirma.onclick = () => {
                    document.getElementById('box-3').style.display = "none"
                    document.getElementById('box-4').style.display = "none"
                    document.getElementById('box-5').style.display = "none"
                    document.getElementById('img-candidatos').style.display = "none"
                    document.getElementById('text-numero').style.display = "none";
                    document.getElementById('text-partido').style.display = "none"
                    document.getElementById('linha').style.display = "none"
                    document.getElementById('final').style.display = "none"
                    document.getElementById('text-candidato-name').style.display = "none"
                    document.getElementById('text-seu-voto').style.display = "none"
                    TypeVeriador.innerText = "PREFEITO(A)"
                    box1.textContent = ""
                    box2.textContent = ""
                    const audioConfirma = new Audio('audio/confirma.mp3')
                    audioConfirma.play()
                }
            }
        } else {
            if(box1.textContent == ""){
            box1.innerText = (`${btn4.textContent}`)
            }else if(box2.textContent == ""){
                box2.innerText = (`${btn4.textContent}`)
            } else if(box3.textContent == ""){
                box3.innerText = (`${btn4.textContent}`)
            } else if(box4.textContent == ""){
                box4.innerText = (`${btn4.textContent}`)
            }else if(box5.textContent == ""){
                box5.innerText = (`${btn4.textContent}`)
            }
            document.getElementById('text-erro').style.display = "none"
        }
        if(box2.textContent == btn4.textContent){
        const partido = document.getElementById('partido')
        partido.innerText = "PJS"
        document.getElementById('text-numero').style.display = "block"
        document.getElementById('text-partido').style.display = "flex"
        document.getElementById('linha').style.display = "block"
        document.getElementById('final').style.display = "block"
        } 
    }

    btn5.onclick = () => {
        if(box1.textContent == ""){
            document.getElementById('text-erro').style.display = "block"
        } else if(box2.textContent == ""){
            box2.innerText = (`${btn5.textContent}`)
            document.getElementById('text-erro').style.display = "none"
        } else if(box3.textContent == ""){
            document.getElementById('text-erro').style.display = "block"
        } else if(box4.textContent == ""){
            document.getElementById('text-erro').style.display = "block"
        } else if(box5.textContent == "") {
            box5.innerText = btn5.textContent
            document.getElementById('text-erro').style.display = "none"
            if(box5.innerText == btn5.textContent){
                // informações do veriador
                const BtnConfirma = document.getElementById('btn-confirma')
                const NomeCadidato = document.getElementById('nome-candidato')
                const TypeVeriador = document.getElementById('text-veriador')
                document.getElementById('img-candidatos').style.display = "block"
                document.getElementById('text-candidato-name').style.display = "flex"
                document.getElementById('text-seu-voto').style.display = "block"
                NomeCadidato.innerText = "Candidato05"
                TypeVeriador.innerText = "VERIADOR"
                // confirma voto
                BtnConfirma.onclick = () => {
                    document.getElementById('box-3').style.display = "none"
                    document.getElementById('box-4').style.display = "none"
                    document.getElementById('box-5').style.display = "none"
                    document.getElementById('img-candidatos').style.display = "none"
                    document.getElementById('text-numero').style.display = "none";
                    document.getElementById('text-partido').style.display = "none"
                    document.getElementById('linha').style.display = "none"
                    document.getElementById('final').style.display = "none"
                    document.getElementById('text-candidato-name').style.display = "none"
                    document.getElementById('text-seu-voto').style.display = "none"
                    TypeVeriador.innerText = "PREFEITO(A)"
                    box1.textContent = ""
                    box2.textContent = ""
                    const audioConfirma = new Audio('audio/confirma.mp3')
                    audioConfirma.play()
                }
            }
        } else {
            if(box1.textContent == ""){
            box1.innerText = (`${btn5.textContent}`)
            }else if(box2.textContent == ""){
                box2.innerText = (`${btn5.textContent}`)
            } else if(box3.textContent == ""){
                box3.innerText = (`${btn5.textContent}`)
            } else if(box4.textContent == ""){
                box4.innerText = (`${btn5.textContent}`)
            }else if(box5.textContent == ""){
                box5.innerText = (`${btn5.textContent}`)
            }
            document.getElementById('text-erro').style.display = "none"
        }
        if(box2.textContent == btn5.textContent){
            const partido = document.getElementById('partido')
            partido.innerText = "PPY"
            document.getElementById('text-numero').style.display = "block"
            document.getElementById('text-partido').style.display = "flex"
            document.getElementById('linha').style.display = "block"
            document.getElementById('final').style.display = "block"
        }
    }

    btn6.onclick = () => {
        if(box1.textContent == "" || box2.textContent == ""){
            document.getElementById('text-erro').style.display = "block"
        } else if(box3.textContent == ""){
            document.getElementById('text-erro').style.display = "block"
        } else if(box4.textContent == ""){
            document.getElementById('text-erro').style.display = "block"
        } else if(box5.textContent == ""){
            document.getElementById('text-erro').style.display = "block"
        } else {
            if(box1.textContent == ""){
            box1.innerText = (`${btn6.textContent}`)
            }else if(box2.textContent == ""){
                box2.innerText = (`${btn6.textContent}`)
            } else if(box3.textContent == ""){
                box3.innerText = (`${btn6.textContent}`)
            } else if(box4.textContent == ""){
                box4.innerText = (`${btn6.textContent}`)
            }else if(box5.textContent == ""){
                box5.innerText = (`${btn6.textContent}`)
            }
        }  
    }

    btn7.onclick = () => {
        if(box1.textContent == "" || box2.textContent == ""){
            document.getElementById('text-erro').style.display = "block"
        } else if(box3.textContent == ""){
            document.getElementById('text-erro').style.display = "block"
        } else if(box4.textContent == ""){
            document.getElementById('text-erro').style.display = "block"
        } else if(box5.textContent == ""){
            document.getElementById('text-erro').style.display = "block"
        } else {
            if(box1.textContent == ""){
            box1.innerText = (`${btn7.textContent}`)
            }else if(box2.textContent == ""){
                box2.innerText = (`${btn7.textContent}`)
            } else if(box3.textContent == ""){
                box3.innerText = (`${btn7.textContent}`)
            } else if(box4.textContent == ""){
                box4.innerText = (`${btn7.textContent}`)
            }else if(box5.textContent == ""){
                box5.innerText = (`${btn7.textContent}`)
            }
        }    
    }

    btn8.onclick = () => {
        if(box1.textContent == "" || box2.textContent == ""){
            document.getElementById('text-erro').style.display = "block"
        } else if(box3.textContent == ""){
            document.getElementById('text-erro').style.display = "block"
        } else if(box4.textContent == ""){
            document.getElementById('text-erro').style.display = "block"
        } else if(box5.textContent == ""){
            document.getElementById('text-erro').style.display = "block"
        } else {
            if(box1.textContent == ""){
            box1.innerText = (`${btn8.textContent}`)
            }else if(box2.textContent == ""){
                box2.innerText = (`${btn8.textContent}`)
            } else if(box3.textContent == ""){
                box3.innerText = (`${btn8.textContent}`)
            } else if(box4.textContent == ""){
                box4.innerText = (`${btn8.textContent}`)
            }else if(box5.textContent == ""){
                box5.innerText = (`${btn8.textContent}`)
            }
        }
        
    }

    btn9.onclick = () => {
        if(box1.textContent == ""){
            box1.innerText = (`${btn9.textContent}`)
            document.getElementById('text-erro').style.display = "none"
        } else if(box3.textContent == ""){
            document.getElementById('text-erro').style.display = "block"
        } else if(box4.textContent == ""){
            document.getElementById('text-erro').style.display = "block"
        } else if(box5.textContent == ""){
            document.getElementById('text-erro').style.display = "block"
        } else {
            if(box1.textContent == "" || box2.textContent == ""){
                box1.innerText = (`${btn9.textContent}`)
            }else if(box2.textContent == ""){
                box2.innerText = (`${btn9.textContent}`)
            } else if(box3.textContent == ""){
                box3.innerText = (`${btn9.textContent}`)
            } else if(box4.textContent == ""){
                box4.innerText = (`${btn9.textContent}`)
            }else if(box5.textContent == ""){
                box5.innerText = (`${btn9.textContent}`)
            }
        }
        
    }

    btn0.onclick = () => {
        if(box1.textContent == "" || box2.textContent == ""){
            document.getElementById('text-erro').style.display = "block"
        } else if(box3.textContent == ""){
            document.getElementById('text-erro').style.display = "block"
        } else if(box4.textContent == ""){
            document.getElementById('text-erro').style.display = "block"
        } else if(box5.textContent == ""){
            document.getElementById('text-erro').style.display = "block"
        } else {
            if(box1.textContent == ""){
            box1.innerText = (`${btn0.textContent}`)
            }else if(box2.textContent == ""){
                box2.innerText = (`${btn0.textContent}`)
            } else if(box3.textContent == ""){
                box3.innerText = (`${btn0.textContent}`)
            } else if(box4.textContent == ""){
                box4.innerText = (`${btn0.textContent}`)
            }else if(box5.textContent == ""){
                box5.innerText = (`${btn0.textContent}`)
            }
        }  
    }

    // Botão corrigir
    const btnCorrigir = document.getElementById('btn-corrigir')
    btnCorrigir.onclick = () => {
        const TypeVeriador = document.getElementById('text-veriador')
        document.getElementById('img-candidatos').style.display = "none"
        document.getElementById('text-numero').style.display = "none";
        document.getElementById('text-partido').style.display = "none"
        document.getElementById('linha').style.display = "none"
        document.getElementById('final').style.display = "none"
        document.getElementById('text-candidato-name').style.display = "none"
        document.getElementById('text-seu-voto').style.display = "none"
        document.getElementById('text-erro').style.display = "none"
        TypeVeriador.innerText = "VERIADOR(A)"
        console.log(TypeVeriador)
        box1.textContent = ""
        box2.textContent = ""
        box3.textContent = ""
        box4.textContent = ""
        box5.textContent = ""
    }