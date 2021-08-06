import { mutationField, nonNull } from 'nexus'

export const AccountStatusCreateOneMutation = mutationField(
  'createOneAccountStatus',
  {
    type: nonNull('AccountStatus'),
    args: {
      data: nonNull('AccountStatusCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.accountStatus.create({
        data,
        ...select,
      })
    },
  },
)
