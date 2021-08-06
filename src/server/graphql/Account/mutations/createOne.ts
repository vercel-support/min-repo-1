import { mutationField, nonNull } from 'nexus'

export const AccountCreateOneMutation = mutationField('createOneAccount', {
  type: nonNull('Account'),
  args: {
    data: nonNull('AccountCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.account.create({
      data,
      ...select,
    })
  },
})
