import { mutationField, nonNull } from 'nexus'

export const AccountRecordTypeUpdateOneMutation = mutationField(
  'updateOneAccountRecordType',
  {
    type: nonNull('AccountRecordType'),
    args: {
      where: nonNull('AccountRecordTypeWhereUniqueInput'),
      data: nonNull('AccountRecordTypeUpdateInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.accountRecordType.update({
        where,
        data,
        ...select,
      })
    },
  },
)
