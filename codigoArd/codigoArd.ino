
int contador=0;
void setup() {
  pinMode(boton, INPUT_PULLUP);

  Serial.begin(9600);
  Serial.println("Iniciando arduino");
}



void loop() {
  if (digitalRead(boton) == 1 )
  {
    contador = contador + 1;
    
    
    delay(500);
  }
  if (Serial.available() )
  {
    char orden = Serial.read();
    if (orden == 'R')
    {
    contador=0;
      
    } else if(orden == 'M')
  {
    Serial.println(contador);

  }

  }
  }