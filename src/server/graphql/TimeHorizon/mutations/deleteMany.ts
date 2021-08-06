import { mutationField, nonNull } from 'nexus'

export const TimeHorizonDeleteManyMutation = mutationField(
  'deleteManyTimeHorizon',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'TimeHorizonWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.timeHorizon.deleteMany({ where } as any)
    },
  },
)
