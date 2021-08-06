import { objectType } from 'nexus'

export const ContactRecordType = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'ContactRecordType',
  definition(t) {
    t.string('id')
    t.string('name')
    t.list.field('ContactRecordType', {
      type: 'Contact',
      args: {
        where: 'ContactWhereInput',
        orderBy: 'ContactOrderByInput',
        cursor: 'ContactWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'ContactScalarFieldEnum',
      },
      resolve(root: any) {
        return root.ContactRecordType
      },
    })
    t.nullable.field('_count', {
      type: 'ContactRecordTypeCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
