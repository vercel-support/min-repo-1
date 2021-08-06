import { mutationField, nonNull } from 'nexus'

export const AccountRecordTypeCreateOneMutation = mutationField(
  'createOneAccountRecordType',
  {
    type: nonNull('AccountRecordType'),
    args: {
      data: nonNull('AccountRecordTypeCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.accountRecordType.create({
        data,
        ...select,
      })
    },
  },
)
