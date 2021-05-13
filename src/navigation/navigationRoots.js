export const mainRoot = {
  root: {
    bottomTabs: {
      children: [
        {
          stack: {
            children: [
              {
                component: {
                  name: 'HomeScreen',
                },
              },
            ],
          },
        },
        {
          stack: {
            children: [
              {
                component: {
                  name: 'Tab2Screen',
                },
              },
            ],
          },
        },
      ],
    },
  },
};

export const loginRoot = {
  root: {
    component: {
      name: 'LoginScreen',
    },
  },
};