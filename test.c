int main(){
    int x;
    int z;
    string cadena;
	string cadena2;
    cadena = "hola ";
    cadena2 =  "mundo";

    //int z; //variable duplicada
    //zazaza = 3.1416; //variable no declarada
    //x = 3+4+5/2; //compatibilidad de tipos
    cin >> x;
    cout << "Hola mundo";
    z = 2 - 3 * 5;
/*
    if (z == 0) {
        x = 1;
        if (z == 0) {
            x = 2;
            if (z == 0) {
                x = 3;
            }
	    x=4;
        }
	x=5;
    } else {
        x=7;
    }
    x=8;
    while (z == 0) {
        x = 9;
    }*/
    ++x;
    --x;
    x=10;
    //x=9*8/7-6+5*(3+2);	//comprobacion tipos
    //x=9*8-cadena;	//comprobacion tipos
    cadena = cadena + cadena2 + " buen dia";

    return 0;
}
