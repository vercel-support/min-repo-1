import { mutationField, nonNull } from 'nexus'

export const ClosureReasonDeleteManyMutation = mutationField(
  'deleteManyClosureReason',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'ClosureReasonWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.closureReason.deleteMany({ where } as any)
    },
  },
)
