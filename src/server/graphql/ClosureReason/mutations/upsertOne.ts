import { mutationField, nonNull } from 'nexus'

export const ClosureReasonUpsertOneMutation = mutationField(
  'upsertOneClosureReason',
  {
    type: nonNull('ClosureReason'),
    args: {
      where: nonNull('ClosureReasonWhereUniqueInput'),
      create: nonNull('ClosureReasonCreateInput'),
      update: nonNull('ClosureReasonUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.closureReason.upsert({
        ...args,
        ...select,
      })
    },
  },
)
