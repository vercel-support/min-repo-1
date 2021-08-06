import { mutationField, nonNull } from 'nexus'

export const AccountStatusUpsertOneMutation = mutationField(
  'upsertOneAccountStatus',
  {
    type: nonNull('AccountStatus'),
    args: {
      where: nonNull('AccountStatusWhereUniqueInput'),
      create: nonNull('AccountStatusCreateInput'),
      update: nonNull('AccountStatusUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.accountStatus.upsert({
        ...args,
        ...select,
      })
    },
  },
)
