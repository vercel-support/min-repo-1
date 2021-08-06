import { mutationField, nonNull } from 'nexus'

export const AccountUpsertOneMutation = mutationField('upsertOneAccount', {
  type: nonNull('Account'),
  args: {
    where: nonNull('AccountWhereUniqueInput'),
    create: nonNull('AccountCreateInput'),
    update: nonNull('AccountUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.account.upsert({
      ...args,
      ...select,
    })
  },
})
