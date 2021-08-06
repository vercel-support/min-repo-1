import { mutationField, nonNull } from 'nexus'

export const ClosureReasonUpdateManyMutation = mutationField(
  'updateManyClosureReason',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'ClosureReasonWhereInput',
      data: nonNull('ClosureReasonUpdateManyMutationInput'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.closureReason.updateMany(args as any)
    },
  },
)
