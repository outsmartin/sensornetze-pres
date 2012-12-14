set terminal png size 900,600
set output 'multilateration_error.png'
set title 'Positionsfehler bei versch. Anzahl Seed-Knoten'
set yrange [0:50]
set xrange [3:13]
set grid
set xlabel 'Anzahl Seed-Knoten'
set ylabel 'relativer Fehler [% epsilon^2]'
plot 'multilateration.dat' using 1:2 title 'zufällig verteilt' with lines,\
'multilateration.dat' using 1:3 title 'manuell verteilt' with lines
