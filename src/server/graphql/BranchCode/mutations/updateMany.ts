import { mutationField, nonNull } from 'nexus'

export const BranchCodeUpdateManyMutation = mutationField(
  'updateManyBranchCode',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'BranchCodeWhereInput',
      data: nonNull('BranchCodeUpdateManyMutationInput'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.branchCode.updateMany(args as any)
    },
  },
)
