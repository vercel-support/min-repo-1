import { mutationField, nonNull } from 'nexus'

export const BranchCodeDeleteManyMutation = mutationField(
  'deleteManyBranchCode',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'BranchCodeWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.branchCode.deleteMany({ where } as any)
    },
  },
)
