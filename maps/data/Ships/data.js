Ships = {
	description: {
		title: {
			'fr': "Bateaux",
            'en': "Ships"
        },
        version: '1.0',
        format: '1.0',
        origin: 'corebox',
        copyright: 'Monolith',
        rules: [ 
            {
                title: { 
                    'fr': "Soute",
                    'en': "Hold"
                },
                description: { 
                    'fr': "La sortie de la soute doit se faire par la zone directement en face des escaliers.",
                    'en': "A character coming out of the hold must move in the area in front of its exit."
                },
                coordinates: [[40,25], [48,70]]
            }, {
                title: { 
                    'fr': "Mât",
                    'en': "Masts"
                },
                description: { 
                    'fr': "Il existe toujours une ligne de vue vers la zone d’un mât même si celui-ci bloque normalement la ligne de vue.",
                    'en': "All the areas of the game board have lines of sight on the masts’areas."
                },
                coordinates: [[27,27], [69,22], [30,72], [70,67]]
            }, {
                title: { 
                    'fr': "Ligne de vue",
                    'en': "Line of sight"
                },
                description: { 
                    'fr': "Il existe une ligne de vue depuis une zone de navire vers une zone d’eau, si la ligne de vue ne passe pas au travers de plus d’une zone de navire (en comptant la zone de départ de la ligne de vue), et permet de bénéficier du bonus de surplomb de {dice_yellow}. Il existe une ligne de vue depuis une zone d’eau vers une zone de navire, si la ligne de vue ne passe pas au travers de plus d’une zone de navire (en comptant la zone d’arriveé de la ligne de vue).",
                    'en': "There is a line of sight from a ship area to a water area if the line of sight does not cross more than one ship area, including the line of sight starting area. The ship areas provide an Elevation bonus of {dice_yellow} on the water areas. There is a line of sight from a water area to a ship area if the line of sight does not cross more than one ship area, including the line of sight finishing area."
                },
                coordinates: []
            }
        ],
        totopic: {
            'fr': "https://the-overlord.com/index.php?/topic/21-core-carte-bateaux/",
            'en': "https://the-overlord.net/index.php?/topic/29-core-ships/"
        },
        losFile: "los-v5.jpg"
	},
	size: [1062, 910],
    zones: {
        "1": {
            'area': [[1.69, 0], [13.75, 14.4], [23.26, 11.98], [23.73, 0.11]],
            'centers': [[15.91, 5.49]],
            'links': ["1#48#1", "1#2#1", "1#4#1", "1#3#1", "1#6#1", "1#7#1"],
            'level': 0
        },
        "2": {
            'area': [[23.92, 0.11], [23.63, 11.98], [31.64, 10.11], [38.98, 9.01], [39.92, 0]],
            'centers': [[31.45, 4.51]],
            'links': ["1#48#1", "1#1#1", "1#3#1", "1#4#1", "1#7#1", "1#8#1"],
            'level': 0
        },
        "3": {
            'area': [[40.02, 0.22], [39.08, 9.01], [51.13, 7.8], [59.6, 7.03], [63.75, 0.33], [63.94, 0.11]],
            'centers': [[50.28, 3.52]],
            'links': ["1#48#1", "1#1#1", "1#2#1", "1#4#1", "1#5#1", "1#8#1", "1#9#1"],
            'level': 0
        },
        "4": {
            'area': [[64.03, 0.11], [59.89, 6.81], [69.3, 5.93], [73.26, 5.93], [77.31, 6.15], [80.6, 6.81], [84.37, 8.02], [88.7, 10.44], [85.88, 0]],
            'centers': [[74.67, 2.53]],
            'links': ["1#48#1", "1#1#1", "1#2#1", "1#3#1", "1#5#1", "1#9#1", "1#10#1"],
            'level': 0
        },
        "5": {
            'area': [[85.97, 0.11], [89.08, 10.44], [92.37, 13.3], [95.76, 15.71], [98.78, 19.34], [100, 19.12], [100, 0.22]],
            'centers': [[94.63, 7.03]],
            'links': ["1#3#1", "1#4#1", "1#10#1", "1#11#1"],
            'level': 0
        },
        "6": {
            'area': [[4.24, 23.41], [5.46, 19.89], [17.61, 16.15], [18.64, 39.56], [7.44, 38.13], [5.65, 35.71], [4.8, 31.76]],
            'centers': [[10.55, 28.13]],
            'links': ["1#48#1", "1#1#1", "1#9#1", "1#40#1", "1#21#1", "1#22#1", "1#28#1", "1#29#1", "1#38#1", "1#34#1", "1#30#1", "1#39#1", "1#35#1", "1#31#1", "1#36#1", "1#37#1", "1#32#1", "1#41#1", "1#33#1", "1#7#1", "1#16#1", "1#12#1", "1#8#1", "1#17#1", "1#33#1", "1#18#1"],
            'level': 1
        },
        "7": {
            'area': [[17.89, 16.81], [28.25, 14.29], [28.91, 21.87], [27.78, 22.42], [26.74, 22.86], [25.89, 24.29], [25.24, 25.6], [25.05, 27.14], [18.17, 27.8]],
            'centers': [[22.98, 20.99]],
            'links': ["1#1#1", "1#2#1", "1#6#1", "1#28#1", "1#29#1", "1#38#1", "1#34#1", "1#30#1", "1#39#1", "1#32#1", "1#33#1", "1#16#1", "1#12#1", "1#8#1", "1#13#1", "1#9#1", "1#14#1", "1#18#1", "1#15#1", "1#10#1", "1#19#1"],
            'level': 1
        },
        "8": {
            'area': [[28.53, 14.18], [28.91, 21.87], [30.23, 22.09], [31.64, 22.42], [32.67, 23.41], [33.62, 24.95], [34.09, 26.59], [39.74, 25.6], [39.36, 23.19], [46.14, 22.31], [45.57, 11.87]],
            'centers': [[37.29, 18.68]],
            'links': ["1#2#1", "1#3#1", "1#6#1", "1#7#1", "1#12#1", "1#28#1", "1#29#1", "1#34#1", "1#30#1", "1#39#1", "1#35#1", "1#31#1", "1#36#1", "1#40#1", "1#37#1", "1#32#1", "1#33#1", "1#17#1", "1#13#1", "1#9#1", "1#14#1", "1#18#1", "1#15#1", "1#10#1", "1#19#1", "1#11#1"],
            'level': 1
        },
        "9": {
            'area': [[45.57, 11.65], [46.23, 22.31], [50, 21.98], [64.31, 18.46], [65.16, 17.8], [66.57, 17.47], [66.01, 9.67]],
            'centers': [[56.21, 15.05]],
            'links': ["1#3#1", "1#4#1", "1#6#1", "1#7#1", "1#16#1", "1#12#1", "1#8#1", "1#17#1", "1#13#1", "1#28#1", "1#29#1", "1#34#1", "1#30#1", "1#39#1", "1#35#1", "1#31#1", "1#36#1", "1#40#1", "1#37#1", "1#32#1", "1#41#1", "1#33#1", "1#14#1", "1#18#1", "1#15#1", "1#10#1", "1#11#1"],
            'level': 1
        },
        "10": {
            'area': [[66.2, 9.45], [66.76, 17.69], [67.98, 17.69], [69.11, 18.24], [70.24, 19.12], [70.9, 20.11], [71.37, 21.1], [71.66, 22.42], [73.26, 22.42], [75.05, 22.2], [76.74, 22.09], [78.25, 21.98], [87.19, 20.99], [86.63, 12.75], [84.37, 11.65], [82.2, 10.77], [80.04, 9.89], [77.87, 9.34], [75.33, 8.9], [73.54, 8.79]],
            'centers': [[75.99, 14.62]],
            'links': ["1#4#1", "1#5#1", "1#7#1", "1#16#1", "1#12#1", "1#8#1", "1#17#1", "1#13#1", "1#9#1", "1#14#1", "1#15#1", "1#39#1", "1#35#1", "1#31#1", "1#36#1", "1#40#1", "1#37#1", "1#32#1", "1#41#1", "1#33#1", "1#19#1", "1#11#1"],
            'level': 1
        },
        "11": {
            'area': [[86.72, 12.42], [88.32, 29.34], [92.18, 24.4], [95.2, 20.22], [92.09, 16.7]],
            'centers': [[91.05, 20.22]],
            'links': ["1#5#1", "1#20#1", "1#27#1", "1#16#1", "1#8#1", "1#17#1", "1#9#1", "1#18#1", "1#15#1", "1#10#1", "1#19#1", "1#28#1", "1#29#1", "1#38#1", "1#34#1", "1#30#1", "1#39#1", "1#35#1", "1#31#1", "1#36#1", "1#40#1", "1#37#1", "1#32#1", "1#41#1", "1#33#1"],
            'level': 1
        },
        "12": {
            'area': [[28.91, 22.09], [30.23, 22.09], [31.92, 22.53], [33.05, 23.96], [33.9, 26.15], [33.99, 27.91], [33.62, 29.78], [32.96, 30.99], [32.11, 32.09], [31.07, 32.75], [30.23, 32.97], [28.81, 32.97], [27.5, 32.42], [26.65, 31.87], [25.99, 30.99], [25.52, 30.11], [25.14, 28.9], [25.05, 27.36], [25.24, 25.93], [25.61, 24.73], [26.27, 23.41], [27.5, 22.42]],
            'centers': [[29.19, 27.58]],
            'links': ["1#6#1", "1#7#1", "1#16#1", "1#28#1", "1#29#1", "1#34#1", "1#30#1", "1#39#1", "1#35#1", "1#31#1", "1#36#1", "1#40#1", "1#37#1", "1#32#1", "1#33#1", "1#8#1", "1#17#1", "1#13#1", "1#9#1", "1#14#1", "1#18#1", "1#15#1", "1#10#1", "1#19#1"],
            'level': 1
        },
        "13": {
            'area': [[39.55, 23.19], [39.83, 28.35], [50.28, 27.36], [50, 22.2]],
            'centers': [[44.54, 25.38]],
            'links': ["1#7#1", "1#16#1", "1#12#1", "1#8#1", "1#17#1", "1#28#1", "1#29#1", "1#34#1", "1#30#1", "1#39#1", "1#35#1", "1#31#1", "1#36#1", "1#40#1", "1#37#1", "1#32#1", "1#33#1", "1#9#1", "1#14#1", "1#18#1", "1#15#1", "1#10#1", "1#19#1"],
            'level': 1
        },
        "14": {
            'area': [[50.19, 22.09], [50.47, 27.25], [64.6, 28.35], [63.37, 27.03], [62.34, 25.93], [62.15, 24.4], [62.05, 23.19], [62.15, 21.98], [62.52, 20.44], [63.47, 19.23], [64.12, 18.68]],
            'centers': [[57.06, 23.74]],
            'links': ["1#7#1", "1#16#1", "1#12#1", "1#8#1", "1#17#1", "1#13#1", "1#9#1", "1#28#1", "1#29#1", "1#34#1", "1#30#1", "1#39#1", "1#35#1", "1#31#1", "1#36#1", "1#40#1", "1#37#1", "1#32#1", "1#41#1", "1#33#1", "1#18#1", "1#15#1", "1#10#1", "1#19#1"],
            'level': 1
        },
        "15": {
            'area': [[66.67, 17.58], [68.08, 17.8], [69.49, 18.68], [70.62, 19.78], [71.37, 21.98], [71.66, 23.74], [71.28, 25.38], [70.53, 27.03], [69.3, 28.13], [68.46, 28.68], [67.51, 28.79], [66.76, 28.9], [65.63, 28.68], [64.88, 28.13], [63.94, 27.58], [62.81, 26.37], [62.43, 24.73], [62.05, 23.41], [62.34, 21.87], [62.71, 20.66], [63.28, 19.67], [64.12, 18.46]],
            'centers': [[66.95, 23.19]],
            'links': ["1#7#1", "1#16#1", "1#12#1", "1#8#1", "1#17#1", "1#13#1", "1#9#1", "1#14#1", "1#18#1", "1#28#1", "1#29#1", "1#34#1", "1#30#1", "1#39#1", "1#35#1", "1#31#1", "1#36#1", "1#40#1", "1#37#1", "1#32#1", "1#41#1", "1#33#1", "1#10#1", "1#19#1", "1#11#1"],
            'level': 1
        },
        "16": {
            'area': [[18.17, 28.02], [24.95, 27.47], [25.24, 29.56], [25.99, 31.32], [27.21, 32.42], [28.44, 33.08], [29.66, 33.19], [30.04, 39.56], [24.76, 39.56], [21, 39.23], [19.11, 39.34]],
            'centers': [[23.45, 33.85]],
            'links': ["1#23#1", "1#6#1", "1#7#1", "1#28#1", "1#29#1", "1#38#1", "1#34#1", "1#30#1", "1#39#1", "1#35#1", "1#31#1", "1#36#1", "1#40#1", "1#37#1", "1#32#1", "1#41#1", "1#33#1", "1#12#1", "1#17#1", "1#13#1", "1#9#1", "1#14#1", "1#18#1", "1#15#1", "1#10#1", "1#19#1", "1#11#1", "1#23#1"],
            'level': 1
        },
        "17": {
            'area': [[34.18, 26.37], [39.64, 25.82], [39.74, 28.57], [46.61, 27.8], [47.27, 38.46], [30.13, 39.67], [29.66, 32.97], [30.79, 32.64], [32.02, 31.98], [32.96, 30.88], [33.8, 28.57]],
            'centers': [[37.76, 32.97]],
            'links': ["1#23#1", "1#24#1", "1#6#1", "1#16#1", "1#12#1", "1#8#1", "1#28#1", "1#29#1", "1#34#1", "1#30#1", "1#39#1", "1#35#1", "1#31#1", "1#36#1", "1#40#1", "1#37#1", "1#32#1", "1#33#1", "1#13#1", "1#9#1", "1#14#1", "1#18#1", "1#15#1", "1#10#1", "1#19#1", "1#11#1"],
            'level': 1
        },
        "18": {
            'area': [[46.7, 27.8], [50.38, 27.47], [64.6, 28.46], [65.82, 29.01], [67.33, 28.79], [67.7, 36.59], [57.72, 37.8], [52.35, 38.68], [47.46, 38.79]],
            'centers': [[56.59, 32.97]],
            'links': ["1#24#1", "1#25#1", "1#26#1", "1#6#1", "1#7#1", "1#16#1", "1#12#1", "1#8#1", "1#17#1", "1#13#1", "1#9#1", "1#14#1", "1#28#1", "1#29#1", "1#34#1", "1#30#1", "1#39#1", "1#35#1", "1#31#1", "1#36#1", "1#40#1", "1#37#1", "1#32#1", "1#33#1", "1#15#1", "1#19#1", "1#11#1"],
            'level': 1
        },
        "19": {
            'area': [[71.66, 22.64], [87.29, 20.99], [87.85, 29.78], [86.16, 31.21], [83.62, 32.2], [80.89, 33.63], [76.65, 35.05], [72.88, 36.04], [67.98, 36.81], [67.33, 28.9], [68.74, 28.35], [70.15, 27.25], [70.81, 26.04], [71.37, 24.73]],
            'centers': [[77.68, 28.57]],
            'links': ["1#26#1", "1#20#1", "1#27#1", "1#7#1", "1#16#1", "1#12#1", "1#8#1", "1#17#1", "1#13#1", "1#14#1", "1#18#1", "1#15#1", "1#10#1", "1#28#1", "1#29#1", "1#38#1", "1#34#1", "1#30#1", "1#39#1", "1#35#1", "1#31#1", "1#36#1", "1#40#1", "1#37#1", "1#32#1", "1#41#1", "1#33#1", "1#11#1"],
            'level': 1
        },
        "20": {
            'area': [[84.27, 35.49], [82.11, 40.66], [99.91, 36.48], [100, 19.23], [98.68, 19.56], [96.52, 23.52], [92.84, 28.24], [89.55, 31.54]],
            'centers': [[94.44, 31.76]],
            'links': ["1#26#1", "1#27#1", "1#19#1", "1#11#1", "1#33#1"],
            'level': 0
        },
        "21": {
            'area': [[0.19, 31.98], [2.26, 30.88], [2.64, 36.26], [5.37, 40.44], [8.1, 41.1], [13.09, 41.87], [16.76, 42.09], [20.34, 42.42], [20.15, 47.36], [0.19, 49.78]],
            'centers': [[8.38, 43.96]],
            'links': ["1#22#1", "1#23#1", "1#24#1", "1#25#1", "1#26#1", "1#27#1", "1#6#1", "1#28#1"],
            'level': 0
        },
        "22": {
            'area': [[0.19, 50.11], [20.24, 47.58], [20.06, 53.41], [16.95, 53.96], [16.67, 52.09], [8, 53.85], [8.29, 55.6], [6.31, 57.03], [4.43, 58.57], [3.01, 60.22], [2.17, 62.09], [1.41, 64.18], [0.75, 67.25], [1.13, 74.18], [0.19, 74.29]],
            'centers': [[7.82, 52.75]],
            'links': ["1#25#1", "1#26#1", "1#21#1", "1#23#1", "1#24#1", "1#6#1", "1#28#1"],
            'level': 0
        },
        "23": {
            'area': [[20.62, 42.42], [20.15, 53.19], [27.59, 51.98], [27.4, 48.57], [30.6, 48.13], [29.47, 42.86]],
            'centers': [[25.05, 47.03]],
            'links': ["1#21#1", "1#22#1", "1#24#1", "1#25#1", "1#26#1", "1#27#1", "1#16#1", "1#17#1", "1#30#1", "1#29#1", "1#16#1"],
            'level': 0
        },
        "24": {
            'area': [[29.76, 42.86], [30.7, 47.8], [41.05, 46.7], [41.43, 49.23], [51.79, 48.46], [51.13, 41.54], [43.79, 41.87], [42.75, 42.2], [33.71, 42.75]],
            'centers': [[40.49, 45.38]],
            'links': ["1#21#1", "1#22#1", "1#23#1", "1#25#1", "1#26#1", "1#27#1", "1#17#1", "1#18#1", "1#30#1", "1#31#1"],
            'level': 0
        },
        "25": {
            'area': [[51.22, 41.43], [51.6, 48.57], [67.89, 46.59], [66.95, 39.89]],
            'centers': [[59.7, 43.96]],
            'links': ["1#22#1", "1#21#1", "1#23#1", "1#24#1", "1#26#1", "1#27#1", "1#18#1", "1#31#1"],
            'level': 0
        },
        "26": {
            'area': [[67.23, 39.89], [68.08, 46.48], [80.04, 45.49], [84.09, 35.82], [79.85, 37.36], [75.14, 38.9]],
            'centers': [[74.39, 42.09]],
            'links': ["1#22#1", "1#21#1", "1#23#1", "1#24#1", "1#25#1", "1#20#1", "1#27#1", "1#18#1", "1#19#1", "1#32#1", "1#33#1"],
            'level': 0
        },
        "27": {
            'area': [[80.04, 45.6], [82.11, 40.77], [99.91, 36.7], [99.91, 67.03], [96.89, 67.14], [99.53, 61.65], [98.4, 59.45], [93.5, 54.62], [88.98, 48.46], [86.72, 46.37], [84.46, 45.6]],
            'centers': [[95.29, 44.07]],
            'links': ["1#21#1", "1#23#1", "1#24#1", "1#25#1", "1#26#1", "1#20#1", "1#19#1", "1#11#1", "1#33#1"],
            'level': 0
        },
        "28": {
            'area': [[18.93, 55.82], [21.85, 87.8], [16.2, 87.58], [12.24, 87.69], [9.79, 87.03], [7.63, 85.93], [6.4, 84.62], [5.27, 82.86], [4.33, 80.99], [4.14, 79.45], [4.05, 77.91], [3.86, 75.93], [3.77, 74.51], [3.48, 72.64], [3.48, 70.33], [3.39, 69.12], [3.2, 67.25], [3.39, 65.6], [3.77, 64.07], [4.43, 62.53], [5.27, 60.77], [7.16, 59.01], [9.79, 57.8], [14.31, 56.7]],
            'centers': [[11.86, 72.31]],
            'links': ["1#21#1", "1#22#1", "1#42#1", "1#43#1", "1#6#1", "1#7#1", "1#16#1", "1#12#1", "1#8#1", "1#17#1", "1#13#1", "1#9#1", "1#14#1", "1#18#1", "1#15#1", "1#19#1", "1#11#1", "1#29#1", "1#38#1", "1#34#1", "1#30#1", "1#31#1", "1#32#1"],
            'level': 1
        },
        "29": {
            'area': [[18.93, 55.71], [23.82, 55.27], [28.63, 54.62], [29.94, 65.93], [28.91, 66.48], [27.78, 67.03], [26.93, 68.35], [26.37, 69.45], [26.18, 71.21], [20.43, 71.76]],
            'centers': [[24.67, 62.09]],
            'links': ["1#23#1", "1#6#1", "1#7#1", "1#16#1", "1#12#1", "1#8#1", "1#17#1", "1#13#1", "1#9#1", "1#14#1", "1#18#1", "1#15#1", "1#19#1", "1#11#1", "1#28#1", "1#38#1", "1#34#1", "1#30#1", "1#39#1", "1#35#1", "1#31#1", "1#36#1", "1#40#1", "1#37#1", "1#32#1", "1#41#1", "1#33#1"],
            'level': 1
        },
        "30": {
            'area': [[29, 54.4], [30.04, 65.82], [31.17, 65.93], [32.3, 66.37], [33.33, 67.03], [34.18, 68.35], [34.84, 70], [38.23, 69.45], [46.52, 68.46], [46.42, 66.04], [50.09, 65.38], [48.78, 51.65]],
            'centers': [[39.45, 60.55]],
            'links': ["1#23#1", "1#24#1", "1#6#1", "1#7#1", "1#16#1", "1#12#1", "1#8#1", "1#17#1", "1#13#1", "1#9#1", "1#14#1", "1#18#1", "1#15#1", "1#19#1", "1#11#1", "1#28#1", "1#29#1", "1#34#1", "1#39#1", "1#35#1", "1#31#1", "1#36#1", "1#40#1", "1#37#1", "1#32#1", "1#41#1", "1#33#1"],
            'level': 1
        },
        "31": {
            'area': [[48.96, 51.65], [67.42, 49.45], [68.46, 60.55], [67.23, 60.88], [66.67, 61.32], [52.54, 65.05], [50.28, 65.27]],
            'centers': [[58.85, 56.04]],
            'links': ["1#24#1", "1#25#1", "1#6#1", "1#16#1", "1#12#1", "1#8#1", "1#17#1", "1#13#1", "1#9#1", "1#14#1", "1#18#1", "1#15#1", "1#10#1", "1#19#1", "1#11#1", "1#28#1", "1#29#1", "1#38#1", "1#34#1", "1#30#1", "1#39#1", "1#35#1", "1#36#1", "1#40#1", "1#37#1", "1#32#1", "1#33#1"],
            'level': 1
        },
        "32": {
            'area': [[67.51, 49.45], [76.65, 48.35], [78.34, 64.29], [73.35, 64.95], [72.69, 63.19], [71.85, 61.76], [70.72, 61.21], [69.49, 60.55], [68.46, 60.44]],
            'centers': [[73.54, 55.49]],
            'links': ["1#26#1", "1#6#1", "1#7#1", "1#16#1", "1#12#1", "1#8#1", "1#17#1", "1#13#1", "1#9#1", "1#14#1", "1#18#1", "1#15#1", "1#10#1", "1#19#1", "1#11#1", "1#28#1", "1#29#1", "1#38#1", "1#34#1", "1#30#1", "1#39#1", "1#35#1", "1#31#1", "1#36#1", "1#37#1", "1#41#1", "1#33#1"],
            'level': 1
        },
        "33": {
            'area': [[77.12, 47.36], [80.23, 81.43], [84.75, 80.44], [88.14, 79.23], [89.74, 77.25], [90.87, 74.84], [91.53, 71.65], [91.53, 67.8], [91.43, 64.84], [90.87, 60.22], [90.11, 56.15], [89.55, 53.3], [88.98, 51.1], [87.29, 49.67], [84.93, 48.13], [81.92, 47.36]],
            'centers': [[86.06, 62.42]],
            'links': ["1#26#1", "1#20#1", "1#27#1", "1#46#1", "1#47#1", "1#6#1", "1#6#1", "1#7#1", "1#16#1", "1#12#1", "1#8#1", "1#17#1", "1#13#1", "1#9#1", "1#14#1", "1#18#1", "1#15#1", "1#10#1", "1#19#1", "1#11#1", "1#29#1", "1#30#1", "1#31#1", "1#40#1", "1#37#1", "1#32#1", "1#41#1"],
            'level': 1
        },
        "34": {
            'area': [[30.04, 65.93], [31.07, 65.93], [32.3, 66.37], [33.43, 67.25], [34.18, 68.24], [34.65, 69.89], [34.75, 71.87], [34.27, 73.3], [33.62, 74.4], [32.67, 75.27], [31.83, 75.71], [31.17, 75.93], [30.04, 75.93], [29.19, 75.71], [28.53, 75.38], [27.87, 74.95], [27.31, 74.29], [26.65, 72.97], [26.18, 71.1], [26.37, 69.45], [26.84, 68.02], [28.44, 66.48]],
            'centers': [[30.23, 70.66]],
            'links': ["1#6#1", "1#7#1", "1#16#1", "1#12#1", "1#8#1", "1#17#1", "1#13#1", "1#9#1", "1#14#1", "1#18#1", "1#15#1", "1#19#1", "1#11#1", "1#28#1", "1#29#1", "1#38#1", "1#30#1", "1#39#1", "1#35#1", "1#31#1", "1#36#1", "1#40#1", "1#37#1", "1#32#1", "1#41#1"],
            'level': 1
        },
        "35": {
            'area': [[46.52, 65.93], [52.45, 65.27], [53.01, 70.44], [46.99, 71.54]],
            'centers': [[49.53, 68.02]],
            'links': ["1#6#1", "1#16#1", "1#12#1", "1#8#1", "1#17#1", "1#13#1", "1#9#1", "1#14#1", "1#18#1", "1#15#1", "1#10#1", "1#19#1", "1#11#1", "1#29#1", "1#38#1", "1#34#1", "1#30#1", "1#39#1", "1#31#1", "1#36#1", "1#40#1", "1#37#1", "1#32#1", "1#41#1"],
            'level': 1
        },
        "36": {
            'area': [[52.64, 65.16], [66.38, 61.54], [65.35, 62.53], [64.88, 63.96], [64.6, 66.04], [65.16, 67.58], [65.63, 68.9], [66.67, 69.78], [67.51, 70.55], [53.3, 70.55]],
            'centers': [[60.36, 66.48]],
            'links': ["1#6#1", "1#16#1", "1#12#1", "1#8#1", "1#17#1", "1#13#1", "1#9#1", "1#14#1", "1#18#1", "1#15#1", "1#10#1", "1#19#1", "1#11#1", "1#29#1", "1#38#1", "1#34#1", "1#30#1", "1#39#1", "1#35#1", "1#31#1", "1#40#1", "1#37#1", "1#32#1", "1#41#1"],
            'level': 1
        },
        "37": {
            'area': [[68.46, 60.77], [69.68, 60.88], [71.19, 61.32], [72.5, 62.75], [73.26, 64.29], [73.26, 66.92], [72.5, 68.46], [71.94, 69.67], [70.81, 70.33], [69.49, 70.66], [68.08, 70.44], [66.76, 69.78], [66.01, 69.01], [65.35, 67.91], [64.97, 67.25], [64.69, 65.27], [65.07, 63.19], [66.67, 61.43]],
            'centers': [[68.74, 65.49]],
            'links': ["1#6#1", "1#16#1", "1#12#1", "1#8#1", "1#17#1", "1#13#1", "1#9#1", "1#14#1", "1#18#1", "1#15#1", "1#10#1", "1#19#1", "1#11#1", "1#29#1", "1#38#1", "1#34#1", "1#30#1", "1#39#1", "1#35#1", "1#31#1", "1#36#1", "1#40#1", "1#32#1", "1#41#1", "1#33#1"],
            'level': 1
        },
        "38": {
            'area': [[20.53, 71.87], [25.99, 71.21], [26.46, 72.86], [27.5, 74.51], [28.63, 75.49], [29.76, 75.93], [31.07, 75.93], [32.11, 87.03], [27.68, 87.14], [25.42, 87.36], [22.03, 87.25]],
            'centers': [[26.18, 79.12]],
            'links': ["1#43#1", "1#6#1", "1#7#1", "1#16#1", "1#19#1", "1#11#1", "1#28#1", "1#29#1", "1#34#1", "1#39#1", "1#35#1", "1#31#1", "1#36#1", "1#40#1", "1#37#1", "1#32#1", "1#41#1"],
            'level': 1
        },
        "39": {
            'area': [[34.75, 70], [46.52, 68.46], [46.89, 71.43], [50.66, 71.21], [51.98, 84.51], [32.11, 87.25], [30.89, 75.82], [32.3, 75.16], [33.52, 74.07], [34.37, 72.75], [34.65, 71.43]],
            'centers': [[40.77, 77.25]],
            'links': ["1#44#1", "1#6#1", "1#7#1", "1#16#1", "1#12#1", "1#8#1", "1#17#1", "1#13#1", "1#9#1", "1#14#1", "1#18#1", "1#15#1", "1#10#1", "1#19#1", "1#11#1", "1#29#1", "1#38#1", "1#34#1", "1#30#1", "1#35#1", "1#31#1", "1#36#1", "1#40#1", "1#37#1", "1#32#1", "1#41#1"],
            'level': 1
        },
        "40": {
            'area': [[50.85, 71.1], [53.01, 70.77], [69.4, 70.88], [70.43, 81.98], [52.07, 84.51]],
            'centers': [[61.21, 76.92]],
            'links': ["1#44#1", "1#45#1", "1#16#1", "1#6#1", "1#12#1", "1#8#1", "1#17#1", "1#13#1", "1#9#1", "1#14#1", "1#18#1", "1#15#1", "1#10#1", "1#19#1", "1#11#1", "1#29#1", "1#38#1", "1#34#1", "1#30#1", "1#39#1", "1#35#1", "1#31#1", "1#36#1", "1#37#1", "1#41#1", "1#33#1"],
            'level': 1
        },
        "41": {
            'area': [[73.35, 65.05], [78.25, 64.4], [79.94, 81.87], [70.53, 83.41], [69.49, 70.88], [70.9, 70], [72.13, 69.12], [73.16, 67.14]],
            'centers': [[75.14, 73.52]],
            'links': ["1#46#1", "1#6#1", "1#16#1", "1#9#1", "1#14#1", "1#15#1", "1#10#1", "1#19#1", "1#11#1", "1#29#1", "1#38#1", "1#34#1", "1#30#1", "1#39#1", "1#35#1", "1#36#1", "1#40#1", "1#37#1", "1#32#1", "1#33#1"],
            'level': 1
        },
        "42": {
            'area': [[0.09, 74.51], [1.04, 74.18], [1.41, 79.45], [2.92, 84.07], [5.08, 87.47], [7.25, 89.01], [9.6, 90.22], [12.9, 90.66], [15.07, 90.22], [11.77, 99.78], [0.09, 99.78]],
            'centers': [[4.43, 92.53]],
            'links': ["1#43#1", "1#44#1", "1#45#1", "1#46#1", "1#28#1"],
            'level': 0
        },
        "43": {
            'area': [[15.25, 90.11], [11.96, 99.78], [38.89, 99.78], [31.83, 89.67], [23.26, 90]],
            'centers': [[23.73, 94.29]],
            'links': ["1#42#1", "1#44#1", "1#45#1", "1#46#1", "1#28#1", "1#38#1"],
            'level': 0
        },
        "44": {
            'area': [[32.11, 89.78], [39.36, 99.89], [60.73, 99.78], [55.08, 87.14]],
            'centers': [[46.89, 93.85]],
            'links': ["1#42#1", "1#43#1", "1#45#1", "1#46#1", "1#47#1", "1#39#1", "1#40#1"],
            'level': 0
        },
        "45": {
            'area': [[55.27, 87.03], [61.02, 99.67], [81.07, 99.78], [70.06, 85.16]],
            'centers': [[66.85, 92.42]],
            'links': ["1#42#1", "1#43#1", "1#44#1", "1#46#1", "1#47#1", "1#40#1"],
            'level': 0
        },
        "46": {
            'area': [[70.24, 84.95], [81.54, 99.89], [100, 99.89], [100, 96.37], [83.05, 83.08]],
            'centers': [[84.18, 91.98]],
            'links': ["1#42#1", "1#43#1", "1#44#1", "1#45#1", "1#47#1", "1#41#1", "1#33#1"],
            'level': 0
        },
        "47": {
            'area': [[83.62, 83.08], [100, 95.82], [99.91, 67.47], [96.99, 67.58], [94.07, 71.65], [92.84, 75.27], [90.77, 78.57], [88.98, 80.88], [88.04, 81.65]],
            'centers': [[96.42, 80.11]],
            'links': ["1#44#1", "1#45#1", "1#46#1", "1#33#1"],
            'level': 0
        },
        "48": {
            'area': [[0.38, 0.22], [1.51, 0.22], [13.37, 14.73], [4.52, 17.36], [2.07, 22.53], [2.26, 30.66], [0.19, 31.87]],
            'centers': [[3.67, 12.2]],
            'links': ["1#1#1", "1#2#1", "1#3#1", "1#6#1", "1#4#1"],
            'level': 0
        }
    }
};
