import { mutationField, nonNull } from 'nexus'

export const TimeHorizonUpdateManyMutation = mutationField(
  'updateManyTimeHorizon',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'TimeHorizonWhereInput',
      data: nonNull('TimeHorizonUpdateManyMutationInput'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.timeHorizon.updateMany(args as any)
    },
  },
)
