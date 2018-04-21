package main

/*
    @author: parvez
    This program plots graph of my avg, best, wins on play.typeracer.com
    plot "plotting_data2.dat" using 1:2 w lines // This is used by gnuplot to plot the graph
    
    Month   Average Best    Races   Wins    Win %
    Apr-18  84.36   115.85  130 50  38.46
    Mar-18  79.07   104.13  237 90  37.97
    Feb-18  82.18   119.08  149 60  40.27
    Jan-18  80.84   111.17  440 151 34.32
    Dec-17  81.59   114.88  466 139 29.83
    Nov-17  79.69   119.29  376 121 32.18
    Oct-17  75.28   101.68  45  21  46.67
    Sep-17  73.04   95.52   114 39  34.21
    Aug-17  77.01   100.98  72  19  26.39
    Jul-17  78.26   98.48   87  26  29.89
    Jun-17  78.56   96.34   29  8   27.59
    May-17  80.19   97.14   17  4   23.53
    Apr-17  82.16   102.83  69  26  37.68
    Mar-17  78.9    92.35   45  14  31.11
    Feb-17  76.09   97.88   72  28  38.89
    Jan-17  81.3    96.2    8   5   62.5
    Dec-16  74.57   85.8    4   2   50
    Nov-16  74.2    98.4    16  6   37.5
    Oct-16  79.03   102.11  179 61  34.08
    Sep-16  76.75   104.85  107 37  34.58
    Aug-16  75  91.88   73  32  43.84
    Jul-16  72.77   99.44   113 35  30.97
    Jun-16  70.2    100.41  36  15  41.67
    May-16  75.34   99.32   47  14  29.79
    Apr-16  77.79   104.87  184 52  28.26
    Aug-15  71.9    91.34   27  10  37.04
    Jul-15  70.76   98.9    125 47  37.6
    Jun-15  70.35   83.65   37  15  40.54
    May-15  72.69   90.51   101 26  25.74
    Apr-15  72.03   99.03   347 123 35.45
    Mar-15  72.71   97.47   206 66  32.04
    Feb-15  68.69   84.51   25  13  52
    Jan-15  67.11   83.56   38  5   13.16
    Dec-14  68.82   85.92   55  16  29.09
    Nov-14  72.93   91.35   259 107 41.31
    Oct-14  70.26   80.08   20  10  50
    Aug-14  69.62   99.96   19  7   36.84
    Jul-14  72.38   94.34   194 78  40.21
    Jun-14  74.09   97.99   251 100 39.84
    May-14  68.43   93.42   211 69  32.7
    Apr-14  68.58   92.5    377 103 27.32
    Mar-14  66.8    88.26   274 93  33.94
    Feb-14  66.94   91.78   540 155 28.7
    Jan-14  63.29   87.02   417 128 30.7
    Dec-13  62.48   86.21   780 212 27.18
    Nov-13  61.9    73.85   56  11  19.64
    Oct-13  63.98   87.05   538 149 27.7
    Sep-13  62.05   81.92   148 47  31.76
    Aug-13  62.16   82.36   183 51  27.87
    Jul-13  60.63   80.82   94  26  27.66
    Jun-13  61.77   83.23   378 105 27.78
    May-13  59.14   82.63   819 215 26.25
    Apr-13  57.91   72.36   89  18  20.22
    Mar-13  57.86   74.05   213 52  24.41
    Feb-13  55.81   76.3    146 31  21.23
    Jan-13  56.96   79.93   431 96  22.27
    Dec-12  54.88   80.46   1,188   281 23.65
    Nov-12  49.14   67.26   180 47  26.11
    Oct-12  53.05   69.79   162 26  16.05
    Sep-12  52.09   73.11   480 117 24.38
    Aug-12  49.47   71.09   879 215 24.46
    Jul-12  45.42   66.79   797 210 26.35
    Jun-12  41.69   56.6    1,086   262 24.13
    May-12  39.7    53.04   656 152 23.17

    Put the above data in xls file and this program by changing 
    of interesting value to 1, 2, and 4
*/

import ( 
    "fmt"
    "time"
//    "io/ioutil"
    "github.com/tealeg/xlsx"
)

func printBlah() {
    fmt.Printf("Blah!\n")
}

func utils() {
    fmt.Printf("Expressions\nConditionals\nLoops\nFunctions\n")
    a := 1
    n := 0
    fmt.Printf("a = %d\n", a)
    c := 3
    c = 4 + a
    fmt.Printf("c = %d\n", c)

    x := 2
    if x < 3 {
        fmt.Printf("x is less than 3\n")
    } else {
        fmt.Printf("x is more than or equal to 3\n")
    }

    for n = 1; n < 10; n++ {
        fmt.Printf("n = %d\n", n)
    }
    
    go printBlah()
    fmt.Printf("Sleeping for 1 sec(s)\n")
    time.Sleep(1 * time.Second)
}

func readFile() {
    fileName := "/Users/parkhan/Code/gpr/pgolibs/src/snd/play_typerracer.xlsx"
    //dat, err := ioutil.ReadFile("/Users/parkhan/Code/gpr/pgolibs/src/snd/play_typerracer.xlsx")   
    //if err == nil {
    //    fmt.Printf("File read successfully!")
    //}   
    //fmt.Printf(string(dat))
    xlFile, err := xlsx.OpenFile(fileName)
    if err != nil {
        fmt.Printf("File read error\n")
    }
    for _, sheet := range xlFile.Sheets {
        for rowNum, row := range sheet.Rows {
            fmt.Printf("%d ", 65 - rowNum)
            for i, cell := range row.Cells {
                text := cell.String()
                if i == 4 { // interesting variable
                    fmt.Printf("%s", text)
                }
            }
            fmt.Printf("\n")
        }
    }
}

    
func main() {
    //utils()
    readFile()
}
