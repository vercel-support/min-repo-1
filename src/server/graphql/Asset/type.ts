import { objectType } from 'nexus'

export const Asset = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Asset',
  definition(t) {
    t.string('id')
    t.nullable.field('Account', {
      type: 'Account',
      resolve(root: any) {
        return root.Account
      },
    })
    t.nullable.string('AccountId')
    t.nullable.string('assetLevel')
    t.nullable.string('name')
    t.nullable.field('owner', {
      type: 'Account',
      resolve(root: any) {
        return root.owner
      },
    })
    t.nullable.string('ownerId')
    t.nullable.field('assetProvidedBy', {
      type: 'Account',
      resolve(root: any) {
        return root.assetProvidedBy
      },
    })
    t.nullable.string('assetProvidedById')
    t.nullable.field('assetServicedBy', {
      type: 'Account',
      resolve(root: any) {
        return root.assetServicedBy
      },
    })
    t.nullable.string('assetServicedById')
    t.nullable.boolean('isCompetitorProduct')
    t.nullable.field('contact', {
      type: 'Contact',
      resolve(root: any) {
        return root.contact
      },
    })
    t.nullable.string('contactId')
    t.nullable.field('createdBy', {
      type: 'User',
      resolve(root: any) {
        return root.createdBy
      },
    })
    t.nullable.string('createdById')
    t.nullable.string('description')
    t.nullable.boolean('digitalAssetStatus')
    t.nullable.string('externalIdentifier')
    t.nullable.field('installDate', { type: 'DateTime' })
    t.nullable.boolean('isInternal')
    t.nullable.field('updatedAt', { type: 'DateTime' })
    t.nullable.field('lastModifiedBy', {
      type: 'User',
      resolve(root: any) {
        return root.lastModifiedBy
      },
    })
    t.nullable.string('lastModifiedById')
    t.nullable.field('manufactureDate', { type: 'DateTime' })
    t.nullable.int('price')
    t.nullable.string('stockKeepingUnit')
    t.nullable.field('purchaseDate', { type: 'DateTime' })
    t.nullable.int('quantity')
    t.nullable.string('serialNumber')
    t.nullable.field('status', {
      type: 'AssetStatus',
      resolve(root: any) {
        return root.status
      },
    })
    t.nullable.string('statusId')
    t.nullable.field('statusReason', {
      type: 'AssetStatusReason',
      resolve(root: any) {
        return root.statusReason
      },
    })
    t.nullable.string('statusReasonId')
    t.nullable.field('usageEndDate', { type: 'DateTime' })
  },
})
