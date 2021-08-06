import { mutationField, nonNull } from 'nexus'

export const AccountTypeUpsertOneMutation = mutationField(
  'upsertOneAccountType',
  {
    type: nonNull('AccountType'),
    args: {
      where: nonNull('AccountTypeWhereUniqueInput'),
      create: nonNull('AccountTypeCreateInput'),
      update: nonNull('AccountTypeUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.accountType.upsert({
        ...args,
        ...select,
      })
    },
  },
)
