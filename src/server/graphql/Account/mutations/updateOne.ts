import { mutationField, nonNull } from 'nexus'

export const AccountUpdateOneMutation = mutationField('updateOneAccount', {
  type: nonNull('Account'),
  args: {
    where: nonNull('AccountWhereUniqueInput'),
    data: nonNull('AccountUpdateInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.account.update({
      where,
      data,
      ...select,
    })
  },
})
