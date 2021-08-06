import { mutationField, nonNull } from 'nexus'

export const TimeHorizonDeleteOneMutation = mutationField(
  'deleteOneTimeHorizon',
  {
    type: 'TimeHorizon',
    args: {
      where: nonNull('TimeHorizonWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.timeHorizon.delete({
        where,
        ...select,
      })
    },
  },
)
