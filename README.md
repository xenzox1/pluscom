# Pluscom Server

Servidor da Pluscom.

# REST API DOCS

## Auth

**Login**

	 /login POST
	 
*Parâmetros:*
 - username (Required)
 - password (Required)
  
 Resposta:
 
     {success: boolean, message: string, token: string}

**Registrar**

    /register POST
    
   *Parâmetros:*
 - nome (Required)
 - email (Required)
 - username (Required)
 - password (Required)
 - nivel (Required)
  
 Resposta:
 
     {success: boolean, message: string}
 **Verificar**

    /verify/:userId All||POST
    
  Parâmetros:
 - token (Opcional, via POST)
 
 Resposta:
 
     {success: boolean, message: string}

**Status**

    /status All||POST
   
 Parâmetros:
 - token (Opcional, via POST)

 Resposta:
 
     {success: boolean}
     