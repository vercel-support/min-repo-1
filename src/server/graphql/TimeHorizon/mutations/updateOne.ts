import { mutationField, nonNull } from 'nexus'

export const TimeHorizonUpdateOneMutation = mutationField(
  'updateOneTimeHorizon',
  {
    type: nonNull('TimeHorizon'),
    args: {
      where: nonNull('TimeHorizonWhereUniqueInput'),
      data: nonNull('TimeHorizonUpdateInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.timeHorizon.update({
        where,
        data,
        ...select,
      })
    },
  },
)
