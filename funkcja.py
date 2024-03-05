import pylab

# a = współczynnik kierunkowy, b = wyraz wolny, x = współrzędne

def funkcja(a, b, x, rosnąca):
    y = []

    if(rosnąca == True):
        for i in x:
            y.append(a*i+b)
        pylab.title("Wykres funkcji liniowej rosnącej")
    else:
        for i in x:
            y.append(-a*i+b)
        pylab.title("Wykres funkcji liniowej malejącej")

    mz = -b / a
    print("Miejsce zerowe = ", mz)

    pylab.plot(x,y)
    pylab.grid(True)
    pylab.show()

funkcja(2, 2, x = range(-5,2), rosnąca = True )