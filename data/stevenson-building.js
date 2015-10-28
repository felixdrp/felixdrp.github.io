/**
 Timetable Glasgow Uni. Gym Stevenson Building
 */
var TIMETABLE_DATA = {
  title: 'Glasgow Uni. Gym Classes',
  name: 'Stevenson Building',
  classes: [
    {
      day: 'Monday',
      hours: [
        {
          hour: '0730 - 0810',
          name: 'Total Body Workout',
          place: 'Studio 3'
        },
        {
          hour: '0815 - 0845',
          name: 'Stretch Express',
          place: 'Studio 3'
        },
        {
          hour: '1130 - 1200',
          name: 'Core Conditioning',
          place: 'Studio 3'
        },
        {
          hour: '1210 - 1250',
          name: 'Circuit Express',
          place: 'Activity Hall'
        },

        {
          hour: '1310 - 1350',
          name: 'Stretch 2 Harmony',
          place: 'Studio 3'
        },
        {
          hour: '1310 - 1350',
          name: 'Park Fitness',
          place: 'Fresh Air'
        },
        {
          hour: '1615 - 1655',
          name: 'Hi-Lo Aerobics',
          place: 'Studio 3'
        },
        {
          hour: '1720 - 1805',
          name: 'BoxFit',
          place: 'Activity Hall'
        },
        {
          hour: '1810 - 1850',
          name: 'Total Body Workout',
          place: 'Studio 3'
        },
        
        {
          hour: '1825 - 1925',
          name: 'Super Circuits',
          place: 'Activity Hall'
        },
      ]
    },

    {
      day: 'Tuesday',
      hours: [
        {
          hour: '1210 - 1250',
          name: 'Stretch 2 Harmony',
          place: 'Studio 3'
        },

        {
          hour: '1215 - 1245',
          name: 'Cardio H.I.T.',
          place: 'Activity Hall'
        },
        
        {
          hour: '1615 - 1655',
          name: 'Total Body Workout',
          place: 'Studio 3'
        },
        
        {
          hour: '1710 - 1735',
          name: 'Core+',
          place: 'Studio 3'
        },
        
        {
          hour: '1740 - 1810',
          name: 'Cardio H.I.T.',
          place: 'Activity Hall'
        },
        
        {
          hour: '1745 - 1810',
          name: 'Core+',
          place: 'Studio 3'
        },
        
        {
          hour: '1830 - 1930',
          name: 'Super Circuits',
          place: 'Activity Hall'
        },
      ]
    },

    {
      day: 'Wednesday',
      hours: [
        {
          hour: '0730 - 0800',
          name: 'Wake Up Workout',
          place: 'Activity Hall'
        },

        {
          hour: '0805 - 0835',
          name: 'Stretch Express',
          place: 'Studio 3'
        },
        
        {
          hour: '1130 - 1200',
          name: 'Core Conditioning',
          place: 'Studio 3'
        },
        
        {
          hour: '1210 - 1250',
          name: 'Total Body Workout',
          place: 'Studio 3'
        },

        {
          hour: '1215 - 1245',
          name: 'Meta-Box',
          place: 'Activity Hall'
        },

        {
          hour: '1410 - 1435',
          name: 'F.I.T. Zone',
          place: 'Studio 3'
        },

        {
          hour: '1715 - 1745',
          name: 'Circuit Express',
          place: 'Activity Hall'
        },
        
        {
          hour: '1720 - 1800',
          name: 'Kettlebells',
          place: 'Studio 3'
        },

        {
          hour: '1810 - 1850',
          name: 'Stretch 2 Harmony',
          place: 'Studio 3'
        },

      ]
    },

    {
      day: 'Thursday',
      hours: [
        {
          hour: '1120 - 1200',
          name: 'Total Body Workout',
          place: 'Studio 3'
        },

        {
          hour: '1210 - 1250',
          name: 'Park Fitness',
          place: 'Fresh Air'
        },

        {
          hour: '1210 - 1250',
          name: 'Kettlebells',
          place: 'Studio 3'
        },

        {
          hour: '1545 - 1625',
          name: 'Hi-Lo Aerobics',
          place: 'Studio 3'
        },

        {
          hour: '1635 - 1715',
          name: 'Stretch 2 Harmony',
          place: 'Studio 3'
        },

        {
          hour: '1720 - 1820',
          name: 'Super Circuits',
          place: 'Activity Hall'
        },

        
        {
          hour: '1725 - 1805',
          name: 'Total Body Workout',
          place: 'Studio 3'
        },
        
        {
          hour: '1815 - 1855',
          name: 'Total Body Workout',
          place: 'Studio 3'
        },

      ]
    },

    {
      day: 'Friday',
      hours: [
        {
          hour: '0730 - 0800',
          name: 'Wake Up Workout',
          place: 'Activity Hall'
        },

        {
          hour: '1210 - 1250',
          name: 'Total Body Workout',
          place: 'Studio 3'
        },

        {
          hour: '1215 - 1245',
          name: 'Circuit Express',
          place: 'Activity Hall'
        },

        {
          hour: '1310 - 1350',
          name: 'Stretch 2 Harmony',
          place: 'Studio 3'
        },

        {
          hour: '1615 - 1655',
          name: 'Total Body Workout',
          place: 'Studio 3'
        },
        
      ]
    },

    {
      day: 'Saturday',
      hours: [
        {
          hour: '1035 - 1105',
          name: 'Cardio HIT',
          place: 'Activity Hall'
        },

        {
          hour: '1115 - 1200',
          name: 'BoxFit',
          place: 'Activity Hall'
        },

        {
          hour: '1230 - 1255',
          name: 'F.I.T. Zone',
          place: 'Studio 3'
        },
        
      ]
    },

    {
      day: 'Sunday',
      hours: [
        {
          hour: '1015 - 1055',
          name: 'Total Body Workout',
          place: 'Studio 3'
        },

        {
          hour: '1110 - 1150',
          name: 'Stretch 2 Harmony',
          place: 'Studio 3'
        },

        {
          hour: '1500 - 1540',
          name: 'Kettlebells',
          place: 'Studio 3'
        },
        
        {
          hour: '1600 - 1700',
          name: 'Super Circuits',
          place: 'Activity Hall'
        },

      ]
    },

  ]

}
