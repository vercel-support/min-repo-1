import { mutationField, nonNull } from 'nexus'

export const TimeHorizonUpsertOneMutation = mutationField(
  'upsertOneTimeHorizon',
  {
    type: nonNull('TimeHorizon'),
    args: {
      where: nonNull('TimeHorizonWhereUniqueInput'),
      create: nonNull('TimeHorizonCreateInput'),
      update: nonNull('TimeHorizonUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.timeHorizon.upsert({
        ...args,
        ...select,
      })
    },
  },
)
