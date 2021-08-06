import { mutationField, nonNull } from 'nexus'

export const TimeHorizonCreateOneMutation = mutationField(
  'createOneTimeHorizon',
  {
    type: nonNull('TimeHorizon'),
    args: {
      data: nonNull('TimeHorizonCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.timeHorizon.create({
        data,
        ...select,
      })
    },
  },
)
