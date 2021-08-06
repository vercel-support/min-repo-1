import { mutationField, nonNull } from 'nexus'

export const AccountDeleteOneMutation = mutationField('deleteOneAccount', {
  type: 'Account',
  args: {
    where: nonNull('AccountWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.account.delete({
      where,
      ...select,
    })
  },
})
