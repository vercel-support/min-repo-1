import { mutationField, nonNull } from 'nexus'

export const BranchCodeUpsertOneMutation = mutationField(
  'upsertOneBranchCode',
  {
    type: nonNull('BranchCode'),
    args: {
      where: nonNull('BranchCodeWhereUniqueInput'),
      create: nonNull('BranchCodeCreateInput'),
      update: nonNull('BranchCodeUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.branchCode.upsert({
        ...args,
        ...select,
      })
    },
  },
)
